`import Ember from 'ember'`

userReviewComment = Ember.Route.extend(
  model: (params) ->
    self = @
    @get('store').findAll('question').then (response) ->
      self.set 'questions', response
      self.get('store').findRecord('review', params.review_id)


  setupController: (controller, model) ->
    controller.set 'questions', @get 'questions'
    controller.set 'model', model

)
`export default userReviewComment`
