import { moduleFor, test } from 'ember-qunit'

moduleFor 'route:users/review-comment', 'Unit | Route | users/review comment', {
  # Specify the other units that are required for this test.
  # needs: ['controller:foo']
}

test 'it exists', (assert) ->
  route = @subject()
  assert.ok route
