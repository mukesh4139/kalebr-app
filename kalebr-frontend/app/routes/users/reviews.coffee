`import Ember from 'ember'`

userReviews = Ember.Route.extend(
  model: (params) ->
    self = @
    @get('store').findRecord('user', params.id).then (reviewee) ->
      self.set 'reviewee', reviewee
      reviewee.get('reviews')

  setupController: (controller, model) ->
    controller.set 'reviewee', @get('reviewee')
    controller.set 'model', model

)
`export default userReviews`
