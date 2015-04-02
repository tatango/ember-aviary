/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-aviary',
  included: function(app) {
    this._super.included(app);
    app.import('bower_components/aviary/index.js');
    app.import('vendor/icons/edit.svg', { destDir: 'assets/images' });
  }
};
