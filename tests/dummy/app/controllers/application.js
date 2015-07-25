import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onEventInvalid: function() {
      console.log('onEventInvalid');
    }
  }
});
