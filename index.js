/* jshint node: true */
'use strict';

module.exports = {
 name: 'ember-aviary',
 included: function(app) {
  app.import('vendor/icons/edit.svg', { destDir: 'assets/images' });
 }
};
