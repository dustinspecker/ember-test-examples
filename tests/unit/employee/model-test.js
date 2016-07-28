import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

// moduleForModel sets up the test environment for testing models.
//
// The first parameter specifies the model to load. The employee
// model will be available and will also be the "subject" of the tests.
//
// The second parameter is test label for identifying this suite of tests.
//
// The third parameter is configuration for this test environment.
moduleForModel('employee', 'Unit | Model | employee', {
  // default scaffold:
  // needs: []

  // The existence of the `needs` property assumes this is a unit test.
  // This runs the test in isolation, meaning other models, adapters, etc.
  // will not be loaded unless added as a `need`.
  // Instead of writing `needs: []`, `unit: true` could be used.
  // `needs: []` is more common to see as models tend to have relationships
  // to other models and those models will have to be added as a "need" for
  // these tests when testing those relationships.

  // The employee model has a relationship to department, so the department
  // model is needed for tests to run.
  needs: ['model:department']
});

test('fullName is computed from first and last names', function (assert) {
  // `this.subject` returns us an employee model because `moduleForModel` is
  // being used.
  const model = this.subject({
    firstName: 'abe',
    lastName: 'lincoln'
  });

  assert.equal(model.get('fullName'), 'abe lincoln', 'full name is built');

  Ember.run(() => {
    // Ember.run is required because `set` triggers updates.
    // Ember.run ensures bindings are updated before continuing with tests.
    model.set('firstName', 'mary');
  });

  assert.equal(
    model.get('fullName'),
    'mary lincoln',
    'fullName is recomputed on firstName change'
  );

  Ember.run(() => {
    model.set('lastName', 'shelley');
  });

  assert.equal(
    model.get('fullName'),
    'mary shelley',
    'fullName is recomputed on lastName change'
  );
});
