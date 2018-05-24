`import Ember from 'ember'`

login = Ember.Route.extend(
  setupController: (controller, model) ->
    controller.set 'model', model
)

`export default login`
