export default {
 name: 'ember-aviary-service',
 initialize: function(container, application) {
   application.inject('component:ember-aviary', 'aviaryApiClient', 'service:aviary-api-client');
 }
};
