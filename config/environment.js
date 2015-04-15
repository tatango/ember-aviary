'use strict';

module.exports = function(/* environment, appConfig */) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "'none'",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' http://feather.aviary.com/3.1.0.284/css/feather_theme_aviary_dark.css http://feather.aviary.com/3.1.0.284/css/feather_theme_aviary_light.css",
      'script-src': "'self' https://dme0ih8comzn4.cloudfront.net/js/feather.js http://feather.aviary.com/3.1.0.284/js/feathercontrols_desktop_en.js"
    }
  };
  return ENV;
};
