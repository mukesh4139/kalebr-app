`import Ember from 'ember'`

userNew = Ember.Route.extend(
  model: ->
    @get('store').createRecord('user')

  setupController: (controller, model) ->
    controller.set 'model', model

)
`export default userNew`
