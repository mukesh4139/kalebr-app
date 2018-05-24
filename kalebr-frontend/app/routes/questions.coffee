`import Ember from 'ember'`

questionsRoute = Ember.Route.extend(
  model: ->
    @get('store').findAll('question')

  setupController: (controller, model) ->
    controller.set 'model', model
)

`export default questionsRoute`
