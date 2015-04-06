/* global sinon */

import Ember from 'ember';
import QUnit from 'qunit';
import {module, test} from 'ember-qunit';
import initializer from 'dummy/initializers/aviary-service';

var container, application;

QUnit.module('AviaryServiceInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  },
  afterEach: function(){}
});

QUnit.test('it sets aviaryApiClient in aviaryEditorComponent', function(assert) {
  expect(1);
  var inject = sinon.stub(application, 'inject');
  initializer.initialize(container, application);

  assert.ok(inject.calledWith('component:aviary-editor', 'aviaryApiClient', 'service:aviary-api-client'));
});

