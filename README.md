# HelloSign for Ember

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

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Calls when user signs document.
     */
    onEventSigned: function() {
      // Do stuff after user signs.
    }
  }
});
```

TODO:
- onEventCanceled
- onEventError
- onEventInvalid


## Contributing
PRs welcome!
