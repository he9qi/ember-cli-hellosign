# Quick Start

## Installation

```
ember install ember-cli-hellosign
```

## Setup
Add your HelloSign **publishable key** to your app's config


{{#docs-snippet name='config-environment.js' language='javascript' title='config/environment.js'}}
  ENV.HelloSign = {
    key: "abc"
  };
{{/docs-snippet}}
