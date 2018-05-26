`import Ember from 'ember'`

userPerformanceReview = Ember.Controller.extend

  actions:
    createPerformanceReview: ->
      users = @get('users').filter (user) ->
        user.selected

      self = @
      if users.length > 0
        @get('model.reviewers').clear()

        users.forEach (user) ->
          self.get('model').get('reviewers').pushObject(user.content)

        @get('model').save().then (response) ->
          self.transitionToRoute('users/reviews', self.get('model.reviewee'))
      else
        alert 'Please Select at least one reviewers'
      false

`export default userPerformanceReview`
