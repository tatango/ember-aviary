import Ember from 'ember';

export default Ember.Component.extend({
  aviaryApiClient: null, // injected
  classNames: ['edit-icon'],
  classNameBindings: ['featherActive:active'],
  image: null,
  url: null,
  imageSelector: null,
  closeOnSave: false,
  featherActive: false,

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
      },
      onClose: function() {
        self.send('onClose');
      }
    };

    this.aviaryApiClient.launch(options, {apiKey: this.get('apiKey'), theme: this.get('theme')});
    this.set('featherActive', true);

    return false;
  },

  actions: {
    onSave: function(imageId, src) {
      this.sendAction('onSave', imageId, src);

      var closeOnSave = this.get('closeOnSave');
      var featherEditor = this.aviaryApiClient.get('featherEditor');
      if(closeOnSave) { featherEditor.close(); }
    },
    onClose: function() {
      this.set('featherActive', false);
    }
  }
});
