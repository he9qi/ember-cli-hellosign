import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hello-sign', 'Integration | Component | hello sign', {
  integration: true
});

test('it renders hellosign embedded frame', function(assert) {
  assert.expect(0);

  // TODO: how to wait for third party JS to complete
  // this.set('url', "https://www.hellosign.com/editor/embeddedSign");
  //
  // this.render(hbs`{{hello-sign url=url}}`);
  // 
  // assert.equal(this.$("#hsEmbeddedOverlay").length, 1);
});

test('it sends onEventInvalid action', function(assert) {
  assert.expect(0);

  // TODO: how to wait for third party JS to complete
  // this.set('url', "https://www.hellosign.com/editor/embeddedSign");
  //
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
