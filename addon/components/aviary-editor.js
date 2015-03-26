import Ember from 'ember';

export default Ember.Component.extend({
  aviaryApiClient: null, // injected
  classNames: ['edit-icon'],
  image: null,
  url: null,

  click: function() {
    var self = this;
    var options = {
      image: this.get('image'),
      url: this.get('url'),
      onSave: function(imageId, src) {
        self.send('onSave', imageId, src);
      }
    };

    this.aviaryApiClient.launch(options);

    return false;
  },

  actions: {
    onSave: function(imageId, src) {
      this.sendAction('onSave', imageId, src);
    }
  }
});
