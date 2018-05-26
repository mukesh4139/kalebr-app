`import Ember from 'ember'`

userPerformanceReviewRoute = Ember.Route.extend(
  model: (params)->
    self = @
    @set 'users', @get('store').findAll('user')
    @get('store').findRecord('user', params.id).then (reviewee) ->
      self.set 'users', self.get('users').toArray().removeObject(reviewee)
      unless reviewee.get('selfPerformanceReview.id')
        self.get('store').createRecord('performance-review', {
          reviewee: reviewee
        })
      else
        reviewee.get('selfPerformanceReview')

  setupController: (controller, model) ->
    reviewerIds = model.get('reviewers').map (reviewer) ->
      reviewer.id

    controller.set 'users', @get('users').map (user) ->
      Em.ObjectProxy.create
        content: user
        selected: model.get('id') and user.id in reviewerIds

    controller.set 'model', model

)
`export default userPerformanceReviewRoute`
