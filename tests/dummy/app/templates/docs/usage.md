# Usage

## Loading the library

In a first step, you'll have to explicitely load the library. This addon
exposes a service to do so:
```javascript
export default class ContractController extends Controller {
  @service helloSign;

  // On user click on "Sign my contract" button
  // it may be done alternatively your route's model
  @action
  handleContractOpen() {
    return this.helloSign.load();
  }
}
```

The loading is done through a dynamic import and uses
[ember-auto-import](https://github.com/ef4/ember-auto-import) under the hood.

## Basic Usage
In your template, once the library is loaded, you can use the following snippet.
Two properties are required: `url` and `key`. This is detailed in the
{{docs-link 'API REFERENCE section' 'docs.api.item' 'components/hello-sign'}}.
```handlebars
{{hello-sign
  url=signUrl
  key=key
  onEventCanceled=(action "handleEventCanceled")
  onEventError=(action "handleEventError")
  onEventSigned=(action "handleEventSigned")
}}
```

Note that the `signUrl` has to generated against HelloSign API.

## More Advanced Usage
In a more advanced usage, you may want to use some additional parameters. They
are detailed in the {{docs-link 'API REFERENCE section' 'docs.api.item' 'components/hello-sign'}}.
```handlebars
{{hello-sign
  url=signUrl
  allowCancel=false
  debug=true
  skipDomainVerification=true
  onEventInvalid=(action "handleEventInvalid")
  onEventCanceled=(action "handleEventCanceled")
  onEventError=(action "handleEventError")
  onEventSigned=(action "handleEventSigned")
}}
```
