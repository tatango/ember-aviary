export default {
 name: 'aviary-service',
 initialize: function(container, application) {
   application.inject('component:aviary-editor', 'aviaryApiClient', 'service:aviary-api-client');
 }
};
