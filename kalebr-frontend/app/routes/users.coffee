`import Ember from 'ember'`

usersRoute = Ember.Route.extend(
  model: ->
    @get('store').findRecord('user', '1')

  setupController: (controller, model) ->
    controller.set 'model', model
)

`export default usersRoute`
