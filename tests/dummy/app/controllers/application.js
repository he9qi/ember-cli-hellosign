import Ember from 'ember';

const { log } = Ember.Logger;

export default Ember.Controller.extend({
  actions: {
    onEventInvalid: function() {
      log('onEventInvalid');
    },
    onEventError: function() {
      log('onEventError');
    },
    onEventSigned: function(data) {
      log('onEventSigned', data);
    },
    onEventCanceled: function(data) {
      log('onEventCanceled', data);
    }
  }
});
