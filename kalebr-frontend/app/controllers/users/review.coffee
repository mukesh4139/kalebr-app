`import Ember from 'ember'`

userReview = Ember.Controller.extend
  actions:
    selectOption: (question, option)->
      question.get('options').forEach (opt) ->
        opt.set 'selected', false
      option.set 'selected', true
      false

`export default userReview`
