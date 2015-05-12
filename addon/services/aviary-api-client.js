/* global Aviary */

import Ember from 'ember';

export default Ember.Object.extend({
  featherEditor: null,

  launch: function(options, initOptions) {
    this.get('featherEditor').launch(options);
  },

  initFeatherEditor: function(initOptions){
    if (this.get('featherEditor')) {
      return;
    }

    var apiKey = (initOptions && initOptions.apiKey) || this.get('apiKey');
    var theme = (initOptions && initOptions.theme) || this.get('theme');
    var aviaryFeather = new Aviary.Feather({
      apiKey: apiKey,
      apiVersion: 3,
      theme: theme
    });
    this.set('featherEditor', aviaryFeather);
  }
});
