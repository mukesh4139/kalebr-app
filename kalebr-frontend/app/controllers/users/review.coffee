`import Ember from 'ember'`

userReview = Ember.Controller.extend
  # Review will only be submitted if all the questions have been attempted by reviewee
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

        @get('model').save().then((response)->
          self.get('reviewee').reload()
          self.transitionToRoute('users/othersPerformanceReviews', self.get('session.currentUser.id'))
        )

`export default userReview`
