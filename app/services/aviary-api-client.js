import Ember from 'ember';
import ENV from '../config/environment';
import AviaryApiClientService from 'ember-aviary/services/aviary-api-client';

export default AviaryApiClientService.extend({
  apiKey: function() {
    //you can also set apiKey (and theme) when declare component
    return ENV.AVIARY_API_KEY || Ember.$('meta[property="aviary:api_key"]').attr('content') || window.AVIARY_API_KEY;
  }.property(),
  theme: function() {
    return ENV.AVIARY_THEME || Ember.$('meta[property="aviary:theme"]').attr('content') || window.AVIARY_THEME;
  }.property()
});
