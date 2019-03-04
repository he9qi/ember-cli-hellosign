/* global HelloSign */
import { assert } from '@ember/debug';

import { isNone } from '@ember/utils';
import Component from '@ember/component';
import config from 'ember-get-config';
import layout from '../templates/components/hello-sign';

const helloSignConfig = config.HelloSign;

/**
  A component to open the HelloSign contract. Usage:
  ```hbs
  {{hello-sign
    url=signUrl
    allowCancel=false
    debug=true
    skipDomainVerification=true
    height=320
    onEventInvalid=(action "handleEventInvalid")
    onEventCanceled=(action "handleEventCanceled")
    onEventError=(action "handleEventError")
    onEventSigned=(action "handleEventSigned")
  }}
  ```
  @class HelloSign
  @public
*/
export default Component.extend({
  layout: layout,

  // Required attributes

  /**
   * Signature url you fetched via the API on your server
   @argument url
   @type String
   */
  url: null,

  // Optional attributes

  /**
   * Whether to allow the user to cancel i.e. close the iFrame
   * without signing (default is true)
   @argument allowCancel
   @type Boolean?
   */
  allowCancel: true,

  /**
   * Where the user will be redirected after signing
   @argument redirectUrl
   @type String?
   */
  redirectUrl: null,

  /**
   * Enables debug output to console.log (default is false)
   @argument debug
   @type Boolean?
   */
  debug: false,

  /**
   * Whether or not to skip the domain verification step
   * (default is false).  This will work only if the Signature
   * Request was created with test_mode=1.
   @argument skipDomainVerification
   @type Boolean?
   */
  skipDomainVerification: false,

  /**
   * The height of the iFrame in pixels.
   * NOTE: Only applicable when a container is specified.
   @argument height
   @type Number?
   */
  height: 640,

  /**
   * DOM element that will contain the iframe on the page (default = document.body)
   @argument containerElement
   @type String?
   */
  containerElement: undefined,

  /**
   * Integer. The version of the embedded user experience to display to signers
   * (1 = legacy, 2 = responsive).
   * This option is only honored if your account has accessed the API prior to Nov 14, 2015.
   @argument uxVersion
   @type Number?
   */
  uxVersion: 2,

  /**
   * One of the HelloSign.CULTURES.supportedCultures (default = HelloSign.CULTURES.EN_US)
   @argument userCulture
   @type String?
   */
  userCulture: HelloSign.CULTURES.EN_US,

  /**
   * When true, the header will be hidden (default = false).
   * This is only functional for customers with embedded branding enabled.
   @argument hideHeader
   @type Boolean?
   */
  hideHeader: undefined,

  /**
   * A callback to handle HelloSign's `canceled` event.
   @argument onEventCanceled
   @type Function?
   */
  onEventCanceled: undefined,

  /**
   * A callback to handle HelloSign's `error` event.
   @argument onEventError
   @type Function?
   */
  onEventError: undefined,

  /**
   * A callback to handle an invalid event.
   @argument onEventInvalid
   @type Function?
   */
  onEventInvalid: undefined,

  /**
   * A callback to handle HelloSign's `signed` event.
   @argument onEventSigned
   @type Function?
   */
  onEventSigned: undefined,

  /**
   * The email of the person issuing a signature request.
   * Required for allowing 'Me + Others' requests
   @argument requester
   @type String?
   */
  requester: undefined,

  /**
   * An associative array to be used to customize the app's signer page
   @argument whiteLabelingOptions
   @type {object}
   */
  whiteLabelingOptions: undefined,

  /**
   * The number of milliseconds to wait for a response from the iframe.
   * If no response after that time the iframe will be closed.
   * 15000 milliseconds is recommended.
   @argument healthCheckTimeoutMs
   @type Number?
   */
  healthCheckTimeoutMs: undefined,

  // initialize HelloSign with api key
  // then open embedded HelloSign signing form
  init() {
    this._super(...arguments);

    if (isNone(this.get('url'))) {
      let message = [
        'SignUrl must be set to use the hello-sign component. You can set the ',
        'key property on the component when instantiating it in your hbs template. ',
        'See how to get SignUrl at https://www.hellosign.com/home/myAccount#api'
      ].join('\n');

      assert(message);
    }

    HelloSign.init(helloSignConfig.key);

    let options = this.getProperties([
      'allowCancel',
      'url',
      'redirectUrl',
      'userCulture',
      'debug',
      'skipDomainVerification',
      'height',
      'uxVersion',
      'hideHeader',
      'requester',
      'whiteLabelingOptions',
      'healthCheckTimeoutMs'
    ]);

    /* Do not conflict with ember's `container` attribute. */
    if (this.get('containerElement')) {
      options.container = this.get('containerElement');
    }

    options.messageListener = eventData => {
      switch (eventData.event) {
        case HelloSign.EVENT_SIGNED:
          this.get('onEventSigned')(eventData);
          break;
        case HelloSign.EVENT_CANCELED:
          this.get('onEventCanceled')();
          break;
        case HelloSign.EVENT_ERROR:
          this.get('onEventError')(eventData);
          break;
        default:
          this.get('onEventInvalid')();
      }
    };
  }
});
