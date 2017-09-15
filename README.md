# HelloSign for Ember
[![Code Climate][climate-badge]](climate-badge-url)
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer][emberobserver-badge]][emberobserver-badge-url]
[![npm version][npm-badge]][npm-badge-url]


This Ember CLI addon provides a component for adding [HelloSign](https://www.hellosign.com)'s Embedded Signing functionality to your app. See https://www.hellosign.com/api/embeddedSigningWalkthrough


![hellosign](https://cloud.githubusercontent.com/assets/29342/8888288/66aa8030-325c-11e5-8083-21d076f352f0.jpg)


## Installation
```sh
ember install ember-cli-hellosign
```

## Setup
Add your HelloSign **publishable key** to your app's config

```javascript
// config/environment.js
ENV.HelloSign = {
  key: "abc"
};
```

## Usage

### Basic Usage
```handlebars
{{hello-sign
  url=signUrl
}}
```

### Heavier Usage
```handlebars
{{hello-sign
  url=signUrl
  allowCancel=false
  debug=true
  skipDomainVerification=true
  height=320
}}
```

## Options

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
- onEventInvalid

```handlebars
{{hello-sign
  url=signUrl
  onEventInvalid='onEventInvalid'
  onEventCanceled='onEventCanceled'
  onEventError='onEventError'
  onEventSigned='onEventSigned'}}
```

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Calls when user signs document.
     */
    onEventSigned: function(data) {
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
    onEventCanceled: function() {
      // Do stuff
    },

    /**
     * Calls when there's invalid response.
     */
    onEventInvalid: function() {
      // Do stuff
    },

    /**
     * Calls when there's error response.
     */
    onEventError: function(data) {
      // Do stuff
    }
  }
});
```

## Contributing
PRs welcome!

[travis-badge]: https://travis-ci.org/he9qi/ember-cli-hellosign.svg
[travis-badge-url]: https://travis-ci.org/he9qi/ember-cli-hellosign
[climate-badge]: https://codeclimate.com/github/he9qi/ember-cli-hellosign/badges/gpa.svg
[climate-badge-url]: https://codeclimate.com/github/he9qi/ember-cli-hellosign
[emberobserver-badge]: http://emberobserver.com/badges/ember-cli-hellosign.svg
[emberobserver-badge-url]: http://emberobserver.com/addons/ember-cli-hellosign
[npm-badge]: https://badge.fury.io/js/ember-cli-hellosign.svg
[npm-badge-url]: https://badge.fury.io/js/ember-cli-hellosign
