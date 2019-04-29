import Service from '@ember/service';
import { resolve } from 'rsvp';

export default Service.extend({
  hellosign: null,

  load() {
    if (this.hellosign) {
      return resolve();
    }

    return import('hellosign-embedded').then(module => {
      this.set('hellosign', module.default);
    });
  }
});
