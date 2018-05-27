`import Ember from 'ember'`

userReview = Ember.Controller.extend
  actions:
    selectOption: (question, option)->
      question.get('options').forEach (opt) ->
        opt.set 'selected', false
      option.set 'selected', true
      false

    submitReview: ->
      self = @
      @get('questions').forEach (question) ->
        selectedOption = undefined
        question.get('options').forEach (option) ->
          if option.get('selected')
            selectedOption = option

        if selectedOption
          questionsAnswer = self.get('store').createRecord('questions-option', {
            option: selectedOption,
            question: question,
          })
          self.get('model').get('questionsOptions').pushObject(questionsAnswer)

      @get('model').save()

`export default userReview`
