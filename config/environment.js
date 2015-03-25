'use strict';

module.exports = function(/* environment, appConfig */) {
  var ENV = {
    contentSecurityPolicy: {
      'script-src': "'self' https://dme0ih8comzn4.cloudfront.net/js/feather.js"
    }
  };
  return ENV;
};
