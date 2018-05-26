import { moduleFor, test } from 'ember-qunit'

moduleFor 'route:users/others-performance-reviews', 'Unit | Route | users/others performance reviews', {
  # Specify the other units that are required for this test.
  # needs: ['controller:foo']
}

test 'it exists', (assert) ->
  route = @subject()
  assert.ok route
