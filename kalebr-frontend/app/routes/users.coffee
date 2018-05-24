`import Ember from 'ember'`

usersRoute = Ember.Route.extend(
  model: ->
    @get('store').findAll('user')

  setupController: (controller, model) ->
    controller.set 'model', model
)

`export default usersRoute`
