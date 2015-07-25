import Ember from "ember";
import ENV from '../config/environment';

export default {
  name: 'ember-hellosign',

  initialize: function(instance) {

    var key = (ENV.HelloSign || {}).key;

    if (Ember.isNone(key)) {
      throw [
        "Your HelloSign key must be set to use the hello-sign component. ",
        "Set the key in your environment.js file (ENV.HelloSign.key). ",
        "Find your HelloSign publishable key at https://www.hellosign.com/home/myAccount#api"
      ].join('\n');
    }

    instance.container.lookup('service:helloSign').set('key', key);
  }
}
