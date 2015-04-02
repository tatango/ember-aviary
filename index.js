/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-aviary',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory +'/aviary-editor/aviary-editor.js');
    app.import('vendor/icons/edit.svg', { destDir: 'assets/images' });
  }
};
