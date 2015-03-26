import Ember from 'ember';
import ENV from '../config/environment';
import AviaryApiClientService from 'ember-aviary/services/aviary-api-client';

export default AviaryApiClientService.extend({
  apiKey: function() {
    var apiKey = ENV.AVIARY_API_KEY || Ember.$('meta[property="aviary:api_key"]').attr('content') || window.AVIARY_API_KEY;
    if (!apiKey) { // seems to work without api key so don't throw error, just log if it's missing
      Ember.Logger.info('Ember Aviary Service: Missing Aviary key, please set `ENV.AVIARY_API_KEY` in config.environment.js');
    }
    return apiKey;
  }.property(),
});
