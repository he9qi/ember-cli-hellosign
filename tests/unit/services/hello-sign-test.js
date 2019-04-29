import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | hello-sign', function(hooks) {
  setupTest(hooks);

  test('load the library', async function(assert) {
    let service = this.owner.lookup('service:hello-sign');
    assert.notOk(service.hellosign);
    await service.load();
    assert.ok(service.hellosign);
  });
});
