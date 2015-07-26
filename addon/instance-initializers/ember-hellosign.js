import Ember from "ember";

export function initialize(instance) {
  var config = instance.container.lookupFactory('config:environment');
  var key    = (config.HelloSign || {}).key;

  if (Ember.isNone(key)) {
    throw [
      "Your HelloSign key must be set to use the hello-sign component. ",
      "Set the key in your environment.js file (ENV.HelloSign.key). ",
      "Find your HelloSign publishable key at https://www.hellosign.com/home/myAccount#api"
    ].join('\n');
  }

  instance.container.lookup('service:helloSign').set('key', key);
}

export default {
  name: 'ember-cli-hellosign',
  initialize: initialize
};
