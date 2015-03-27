import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Aviary Editor', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('renders component', function() {
  expect(1);
  visit('/');

  andThen(function() {
    equal(find('.aviary-editor').length, 1, "Renders aviary-editor component");
  });
});
