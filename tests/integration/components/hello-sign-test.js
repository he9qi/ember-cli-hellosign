import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hello-sign', 'Integration | Component | hello sign', {
  integration: true
});

test('it throws error if Signing URL is not provided', function(assert) {
  var self  = this;
  var error = [
    "SignUrl must be set to use the hello-sign component. You can set the ",
    "key property on the component when instantiating it in your hbs template. ",
    "See how to get SignUrl at https://www.hellosign.com/home/myAccount#api"
  ].join('\n');

  assert.throws(function() {
    self.render(hbs`{{hello-sign}}`);
  }, error, "has thrown an Error");
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
