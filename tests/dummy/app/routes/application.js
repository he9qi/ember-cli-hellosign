import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  helloSign: service(),

  beforeModel() {
    return this.helloSign.load();
  }
});
