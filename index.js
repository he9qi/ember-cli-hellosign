'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function (name) {
    if (name === 'body') {
      return '<script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.min.js"></script>';
    }
  }
};
