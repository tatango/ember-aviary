import Ember from 'ember';

export default Ember.Object.extend({
 apiKey: function() {
   return Ember.$('meta[property="aviary:api_key"]').attr('content') || window.AVIARY_API_KEY;
 }.property(),

 featherEditor: function() {
   return new Aviary.Feather({
     apiKey: this.get('apiKey'),
     apiVersion: 3
   });
 }.property('apiKey'),

 launch: function(options) {
  this.get('featherEditor').launch(options);
 }
});
