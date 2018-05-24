`import Ember from 'ember'`

questionNew = Ember.Route.extend(
  model: ->
    @get('store').createRecord('question')

  setupController: (controller, model) ->
    for i in [1..4]
      option = @get('store').createRecord('option')
      model.get('options').pushObject(option)

    controller.set 'model', model
)
`export default questionNew`
