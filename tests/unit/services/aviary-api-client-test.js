import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import env from 'dummy/config/environment';
import QUnit from 'qunit';

moduleFor('service:aviary-api-client', 'AviaryApiClientService', {
  setup: function() {
    env.AVIARY_API_KEY = "yek321";
    env.AVIARY_THEME = "dark";
    this.container.register('config:environment', env);
  }
});

test('api key uses ENV variable', function() {
  expect(1);
  var service = this.subject();
  equal(service.get('apiKey'), "yek321");
});

test('api key defaults to global if no env variable or meta tag exists', function(){
  expect(1);
  env.AVIARY_API_KEY = null;
  window.AVIARY_API_KEY = "key123";
  var service = this.subject();
  equal(service.get('apiKey'), "key123");
});

test('theme uses ENV variable', function() {
  expect(1);
  var service = this.subject();
  equal(service.get('theme'), "dark");
});

test('theme defaults to global if no env variable or meta tag exists', function(){
  expect(1);
  env.AVIARY_THEME = null;
  window.AVIARY_THEME = "light";
  var service = this.subject();
  equal(service.get('theme'), "light");
});

/**
 * @todo figure out how to change ENV variables and meta tag at runtime, and test them
 */
