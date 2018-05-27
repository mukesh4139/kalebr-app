`import Ember from 'ember'`

userReviewComment = Ember.Route.extend(
  model: (params) ->
    self = @
    @get('store').findAll('question', {review_id: params.review_id}).then (response) ->
      self.set 'questions', response
      self.get('store').findRecord('review', params.review_id)


  setupController: (controller, model) ->
    self = @
    @get('questions').forEach (question) ->
      question.get('options').forEach (option) ->
        model.get('questionsOptions').forEach (questionOption) ->
          if (questionOption.get('question.id') == question.id)
            if (option.id == questionOption.get('option.id'))
              option.set 'selected', true

    controller.set 'questions', @get 'questions'
    controller.set 'model', model

  exit: ->
    @get('questions').forEach (question) ->
      question.get('options').forEach (option) ->
        option.set 'selected', false
)
`export default userReviewComment`
