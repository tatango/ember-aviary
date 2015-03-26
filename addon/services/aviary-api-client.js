/* global Aviary */

import Ember from 'ember';

export default Ember.Object.extend({
  featherEditor: null,

  init: function() {
    var featherEditor = this.get('featherEditor');
    if (!featherEditor) {
      var aviaryFeather = new Aviary.Feather({
        apiKey: this.get('apiKey'),
        apiVersion: 3
      });
      this.set('featherEditor', aviaryFeather);
    }
  },

  launch: function(options) {
    this.get('featherEditor').launch(options);
  }
});
