`import Ember from 'ember'`

userReview = Ember.Controller.extend
  checkIfAllQuestionsAttempted: ->
    self = @
    allAttempted = true
    @get('questions').forEach (question) ->
      if !question.get('attempted')
        self.set 'showErrors', true
        allAttempted = false

    allAttempted

  actions:
    selectOption: (question, option)->
      question.set 'attempted', true
      question.get('options').forEach (opt) ->
        opt.set 'selected', false
      option.set 'selected', true
      false

    submitReview: ->
      self = @
      if @checkIfAllQuestionsAttempted()
        @get('questions').forEach (question) ->
          selectedOption = undefined
          question.get('options').forEach (option) ->
            if option.get('selected')
              selectedOption = option

          if selectedOption
            questionsAnswer = self.get('store').createRecord('questions-option', {
              option: selectedOption,
              question: question.get('content'),
            })
            self.get('model').get('questionsOptions').pushObject(questionsAnswer)

        @get('model').save()
        @get('reviewee').reload()
        @transitionToRoute('users/othersPerformanceReviews', @get('session.currentUser.id'))

`export default userReview`
