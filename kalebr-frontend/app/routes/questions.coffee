`import Ember from 'ember'`

questionsRoute = Ember.Route.extend(
  model: ->
    @get('store').query('question', {all: true}).then (questions) ->
      questions

  setupController: (controller, model) ->
    model = model.map (question) ->
      Em.ObjectProxy.create
        content: question
        showOptions: false
    controller.set 'model', model
)

`export default questionsRoute`
