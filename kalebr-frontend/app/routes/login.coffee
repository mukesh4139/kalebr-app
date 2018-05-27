`import Ember from 'ember'`

login = Ember.Route.extend(
  beforeModel: ->
    if @get('session.currentUser')
      @transitionTo('home')

  setupController: (controller, model) ->
    controller.reset()
    controller.set 'model', model
)

`export default login`
