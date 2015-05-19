/* global Aviary */

import Ember from 'ember';

export default Ember.Object.extend({
  env: function() {
    return this.container.lookupFactory('config:environment');
  }.property(),
  apiKey: function() {
    var apiKey = this.get('env').AVIARY_API_KEY || Ember.$('meta[property="aviary:api_key"]').attr('content') || window.AVIARY_API_KEY;
    if (!apiKey) { // seems to work without api key so don't throw error, just log if it's missing
      Ember.Logger.info('Ember Aviary Service: Missing Aviary key, please set `ENV.AVIARY_API_KEY` in config.environment.js');
    }
    return apiKey;
  }.property('env'),
  theme: function() {
    return this.get('env').AVIARY_THEME || Ember.$('meta[property="aviary:theme"]').attr('content') || window.AVIARY_THEME;
  }.property('env'),

  featherEditor: null,

  init: function() {
    var featherEditor = this.get('featherEditor');
    if (!featherEditor) {
      var aviaryFeather = new Aviary.Feather({
        apiKey: this.get('apiKey'),
        apiVersion: 3,
        theme: this.get('theme')
      });
      this.set('featherEditor', aviaryFeather);
    }
  },

  launch: function(options) {
    this.get('featherEditor').launch(options);
  }
});
