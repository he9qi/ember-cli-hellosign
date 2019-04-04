import Ember from 'ember';
import { module, test } from 'qunit';
import { render, waitUntil } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let waitForError = options => {
  const orig = Ember.onerror;

  let error = null;
  Ember.onerror = err => {
    error = err;
  };

  return waitUntil(() => error, options).finally(() => {
    Ember.onerror = orig;
  });
};

module('Integration | Component | hello sign', function(hooks) {
  setupRenderingTest(hooks);

  test('it throws error if Signing URL is not provided', async function(assert) {
    assert.expect(1);

    await this.owner.lookup('service:hello-sign').load();

    let expectedMessage = 'SignUrl must be set to use the hello-sign component';

    // https://github.com/workmanw/ember-qunit-assert-helpers/issues/18
    const [err] = await Promise.all([
      waitForError(),
      render(hbs`{{hello-sign key='hs-key'}}`)
    ]);

    assert.ok(err.message.includes(expectedMessage));
  });

  test('it throws error if key is not provided', async function(assert) {
    assert.expect(1);

    await this.owner.lookup('service:hello-sign').load();

    let expectedMessage = 'Your HelloSign publishable key seems to be missing';

    // https://github.com/workmanw/ember-qunit-assert-helpers/issues/18
    const [err] = await Promise.all([
      waitForError(),
      render(hbs`{{hello-sign url='random-url'}}`)
    ]);

    assert.ok(err.message.includes(expectedMessage));
  });

  test('it renders hellosign embedded frame', function(assert) {
    assert.expect(0);

    // TODO: how to wait for third party JS to complete
    // this.set('url', "https://www.hellosign.com/editor/embeddedSign");
    // this.render(hbs`{{hello-sign url=url}}`);
    //
    // assert.equal(this.$("#hsEmbeddedOverlay").length, 1);
  });

  test('it sends onEventInvalid action', function(assert) {
    assert.expect(0);

    // TODO: how to wait for third party JS to complete
    // this.set('url', "https://www.hellosign.com/editor/embeddedSign");
    // this.on('onEventInvalid', function() {
    //   assert.ok(true);
    // });
    //
    // this.render(hbs`
    //   {{hello-sign
    //     url=url
    //     onEventInvalid='onEventInvalid'}}
    //   `);
  });
});
