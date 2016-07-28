import { moduleForModel, test } from 'ember-qunit';

moduleForModel('department', 'Unit | Model | department', {
  // Specify the other units that are required for this test.
  needs: ['model:employee']
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
