# HelloSign for Ember
[![Code Climate][climate-badge]](climate-badge-url)
[![Build Status][travis-badge]][travis-badge-url]


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
TODO: container

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
