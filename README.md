# HelloSign for Ember

This Ember CLI addon provides a component for adding Stripe checkout functionality to your app. See https://stripe.com/docs/checkout

![hellosign](https://cloud.githubusercontent.com/assets/29342/8888288/66aa8030-325c-11e5-8083-21d076f352f0.jpg)


## Installation
```sh
npm install ember-hellosign --save-dev
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

### Heavier Usage TODO:
```handlebars
{{hello-sign
  url=signUrl
  allowCancel=false
  debug=true
  skipDomainVerification=true
  container=document.getElementById('myHSContainer')
  height=320
}}
```

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
