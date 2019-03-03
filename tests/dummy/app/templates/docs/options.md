# Options

- `url` - String. The url to open in the child frame
- `redirectUrl` - String. Where to go after the signature is completed
- `allowCancel` - Boolean. Whether a cancel button should be displayed (default = true)
- `userCulture` - One of the HelloSign.CULTURES.supportedCultures (default = HelloSign.CULTURES.EN_US)
- `debug` - Boolean. When true, debugging statements will be written to the console (default = false)
- `skipDomainVerification` - Boolean. When true, domain verification step will be skipped if and only if the Signature Request was created with test_mode=1 (default = false)
- `containerElement` - DOM element that will contain the iframe on the page (default = document.body)
- `height` - Height of the iFrame (only applicable when a container is specified)
- `hideHeader` - Boolean. When true, the header will be hidden (default = false). This is only functional for customers with embedded branding enabled.
- `uxVersion` - Integer. The version of the embedded user experience to display to signers (1 = legacy, 2 = responsive). This option is only honored if your account has accessed the API prior to Nov 14, 2015.
- `requester` - String. The email of the person issuing a signature request. Required for allowing 'Me + Others' requests
- `whiteLabelingOptions` - Object. An associative array to be used to customize the app's signer page
- `healthCheckTimeoutMs` - Integer. The number of milliseconds to wait for a response from the iframe. If no response after that time the iframe will be closed. 15000 milliseconds is recommended.


## Actions
- onEventSigned
- onEventCanceled
- onEventError
- handleEventInvalid

```handlebars
{{hello-sign
  url=signUrl
  onEventInvalid=(action "handleEventInvalid")
  onEventCanceled=(action "handleEventCanceled")
  onEventError=(action "handleEventError")
  onEventSigned=(action "handleEventSigned")}}
```

```javascript
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    /**
     * Calls when user signs document.
     */
    handleEventSigned(data) {
      // Do stuff after user signs.
      // Data:
      // {
      //  signature_id: "63b15d34dad8331f14e3f0d061f6",
      //  event:  "signature_request_signed"
      // }
    },

    /**
     * Calls when user closes/cancels document.
     */
    handleEventCanceled() {
      // Do stuff
    },

    /**
     * Calls when there's invalid response.
     */
    handleEventInvalid() {
      // Do stuff
    },

    /**
     * Calls when there's error response.
     */
    handleEventError(data) {
      // Do stuff
    }
  }
});
```
