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
  expect(2);
  visit('/');

  andThen(function() {
    equal(find('.edit-icon').length, 1, 'Aviary editor component was rendered.');
    click('.edit-icon');
  });

  andThen(function() {
    equal(find('.edit-icon.active').length, 1, 'Aviary editor launched.');
  });
});
