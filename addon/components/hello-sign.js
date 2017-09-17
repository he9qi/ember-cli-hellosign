/* global HelloSign */
import $ from 'jquery';
import Ember from 'ember';
import config from 'ember-get-config';
import layout from '../templates/components/hello-sign';

const helloSignConfig = config.HelloSign;

export default Ember.Component.extend({
  layout: layout,

  /**********************************
   * Required attributes
   **********************************/

  /**
   * Signature url you fetched via the API on your server
   */
  url: null,


  /**********************************
   * Optional attributes
   **********************************/

  /**
   * Whether to allow the user to cancel i.e. close the iFrame
   * without signing (default is true)
   */
  allowCancel: true,

  /**
   * Where the user will be redirected after signing
   */
  redirectUrl: null,

  /**
   * Enables debug output to console.log (default is false)
   */
  debug: false,

  /**
   * Whether or not to skip the domain verification step
   * (default is false).  This will work only if the Signature
   * Request was created with test_mode=1.
   */
  skipDomainVerification: false,

  /**
   * The height of the iFrame in pixels.
   * NOTE: Only applicable when a container is specified.
   */
  height: 640,

  /**
   * DOM element that will contain the iframe on the page (default = document.body)
   */
  containerElement: undefined,

  /**
   * Integer. The version of the embedded user experience to display to signers
   * (1 = legacy, 2 = responsive).
   * This option is only honored if your account has accessed the API prior to Nov 14, 2015.
   */
  uxVersion: 2,

  /**
   * One of the HelloSign.CULTURES.supportedCultures (default = HelloSign.CULTURES.EN_US)
   */
  userCulture: HelloSign.CULTURES.EN_US,

  /**
   * Boolean. When true, the header will be hidden (default = false).
   * This is only functional for customers with embedded branding enabled.
   */
  hideHeader: undefined,

  /**
   * String. The email of the person issuing a signature request.
   * Required for allowing 'Me + Others' requests
   */
  requester: undefined,

  /**
   * Object. An associative array to be used to customize the app's signer page
   */
  whiteLabelingOptions: undefined,

  /**
   * Integer. The number of milliseconds to wait for a response from the iframe.
   * If no response after that time the iframe will be closed.
   * 15000 milliseconds is recommended.
   */
  healthCheckTimeoutMs: undefined,

  /**
   * Initialize HelloSign with api key. Then open embedded
   * HelloSign signing form
   */
  init() {
    this._super(...arguments);

    let self = this;
    if (Ember.isNone(this.get('url'))) {
      let message = [
        "SignUrl must be set to use the hello-sign component. You can set the ",
        "key property on the component when instantiating it in your hbs template. ",
        "See how to get SignUrl at https://www.hellosign.com/home/myAccount#api"
      ].join('\n');

      Ember.assert(message);
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

    HelloSign.open($.extend(options, {
      messageListener: function(eventData) {
        switch(eventData.event) {
          case HelloSign.EVENT_SIGNED:
            self.sendAction('onEventSigned', eventData);
            break;
          case HelloSign.EVENT_CANCELED:
            self.sendAction('onEventCanceled');
            break;
          case HelloSign.EVENT_ERROR:
            self.sendAction('onEventError', eventData);
            break;
          default:
            self.sendAction('onEventInvalid');
        }
      }
    }));
  }
});
