import Ember from 'ember';
import layout from '../templates/components/hello-sign';
import $ from 'jquery';

export default Ember.Component.extend({
  layout: layout,

  /**
   * Use service to access ENV.
   */
  helloSign: Ember.inject.service(),


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
   * Initialize HelloSign with api key. Then open embedded
   * HelloSign signing form
   */
  _initializeHelloSign: Ember.on('init', function() {
    var self = this;
    var ENV  = self.get('helloSign');

    if (Ember.isNone(this.get('url'))) {
      throw [
        "SignUrl must be set to use the hello-sign component. You can set the ",
        "key property on the component when instantiating it in your hbs template. ",
        "See how to get SignUrl at https://www.hellosign.com/home/myAccount#api"
      ].join('\n');
    }

    HelloSign.init(ENV.get('key'));

    var options = this.getProperties([
      'allowCancel',
      'url',
      'redirectUrl',
      'debug',
      'skipDomainVerification',
      'height'
    ]);

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

  }),
});
