import Ember from 'ember';

export default Ember.Component.extend({
  url: 'http://1.media.collegehumor.cvcdn.com/59/27/7a9d1c0082699e19232f1d6ffda092b2-dogpoop2.jpg',
  image: null,

  didInsertElement: function() {
    this.set('image', this.$('img'));
  },

  logSave: function() {
    Ember.Logger.log('Image saved.');
  },

  actions: {
    onSave: function(imageId, src) {
      this.set('url', src);
      this.logSave();
    }
  }
});
