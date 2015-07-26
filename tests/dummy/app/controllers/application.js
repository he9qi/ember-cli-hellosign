import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onEventInvalid: function() {
      console.log('onEventInvalid');
    },
    onEventError: function() {
      console.log('onEventError');
    },
    onEventSigned: function(data) {
      console.log('onEventSigned');
      console.log(data);
    },
    onEventCanceled: function(data) {
      console.log('onEventCanceled');
      console.log(data);
    }
  }
});
