`import Ember from 'ember'`

login = Ember.Route.extend(
  setupController: (controller, model) ->
    controller.reset()
    controller.set 'model', model
)

`export default login`
