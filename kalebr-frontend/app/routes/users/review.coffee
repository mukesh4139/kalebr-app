`import Ember from 'ember'`

userReview = Ember.Route.extend(
  model: (params) ->
    self = @
    @get('store').findAll('question').then (response) ->
      self.set 'questions', response
      self.get('store').findRecord('user', params.id)

  setupController: (controller, model) ->
#    @get('questions').forEach (question) ->
#      question.set('options', question.get('options').map (option) ->
#        Em.ObjectProxy.create
#          content: option
#          selected: false
#      )
    controller.set 'questions', @get 'questions'
    controller.set 'model', model

)
`export default userReview`
