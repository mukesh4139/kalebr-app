`import Ember from 'ember'`

userReview = Ember.Route.extend(
  model: (params) ->
    self = @
    @get('store').findAll('question').then (response) ->
      self.set 'questions', response
      self.get('store').findRecord('user', params.id).then (reviewee) ->
        self.set 'reviewee', reviewee
        if self.get('session.currentUser.scopedReview.id')
          self.get('session.currentUser.scopedReview')
        else
          self.get('store').createRecord('review', {
            reviewer: self.get('session.currentUser'),
            performanceReview: self.get('reviewee.selfPerformanceReview')
          })

  setupController: (controller, model) ->
    controller.set 'questions', @get('questions').map (question) ->
      Em.ObjectProxy.create
        content: question
        attempted: false

    controller.set 'reviewee', @get('reviewee')
    controller.set 'model', model
    controller.set 'showErrors', false

  exit: ->
    @get('questions').forEach (question) ->
      question.get('options').forEach (option) ->
        option.set 'selected', false

)
`export default userReview`
