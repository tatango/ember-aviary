import Ember from 'ember';

export default Ember.Component.extend({
  aviaryApiClient: null, // injected
  classNames: ['edit-icon'],
  image: null,
  url: null,
  imageSelector: null,
  closeOnSave: false,

  imageToEdit: function() {
    var imageNotSet = Ember.isEmpty(this.get('image'));
    var selector = this.get('imageSelector');
    return imageNotSet ? this.get('parentView').$(selector || 'img') : this.get('image');
  }.property('parentView', 'image', 'imageSelector'),

  click: function() {
    var self = this;
    var options = {
      image: this.get('imageToEdit'),
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

      var closeOnSave = this.get('closeOnSave');
      var featherEditor = this.aviaryApiClient.get('featherEditor');
      if(closeOnSave) { featherEditor.close(); }
    }
  }
});
