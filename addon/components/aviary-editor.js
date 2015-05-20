import Ember from 'ember';

export default Ember.Component.extend({
  aviaryApiClient: null, // injected
  classNames: ['edit-icon'],
  classNameBindings: ['featherActive:active'],
  image: null,
  url: null,
  fileFormat: null,
  cropPresetsStrict: false,
  tools: 'all',
  forceCropMessage: null,
  imageSelector: null,
  closeOnSave: false,
  featherActive: false,

  imageToEdit: function() {
    var imageNotSet = Ember.isEmpty(this.get('image'));
    var selector = this.get('imageSelector');
    return imageNotSet ? this.get('parentView').$(selector || 'img') : this.get('image');
  }.property('parentView', 'image', 'imageSelector'),

  forceCropPresetArray: function() {
    var label = this.get('forceCropPresetLabel');
    var size = this.get('forceCropPresetSize');
    return label && size ? [label, size] : null;
  }.property('forceCropPresetName', 'forceCropPresetSize'),

  click: function() {
    var self = this;
    var options = {
      image: this.get('imageToEdit'),
      url: this.get('url'),
      fileFormat: this.get('fileFormat'),
      cropPresetsStrict: this.get('cropPresetsStrict'),
      tools: this.get('tools'),
      onSave: function(imageId, src) {
        self.send('onSave', imageId, src);
      },
      onClose: function() {
        self.send('onClose');
      }
    };

    // Property should not be included in options if not present.
    if(this.get('forceCropPresetArray')) {
      options.forceCropPreset = this.get('forceCropPresetArray');
      options.forceCropMessage = this.get('forceCropMessage');
    }

    this.aviaryApiClient.launch(options);
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
