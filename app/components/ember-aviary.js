import Ember from 'ember';

export default Ember.Component.extend({
 classNames: ['aviary-launch'],
 aviaryApiClient: null, // injected
 url: null, // passed in

 onSave: function() {},

 actions: {
   editImage: function() {
     featherEditor.launch({
       image: this.$('img'),
       url: this.get('url'),
       onSave: this.onSave
     });
     return false;
   }
 }
});
