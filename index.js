/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-hellosign',

  contentFor: function (name) {
    if (name == 'body') {
      return '<script type="text/javascript" src="//s3.amazonaws.com/cdn.hellofax.com/js/embedded.js"></script>';
    }
  }
};
