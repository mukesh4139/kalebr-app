`import Ember from 'ember'`

userReviews = Ember.Route.extend(
  model: (params) ->
    @get('session.currentUser.reviews')

  setupController: (controller, model) ->
    controller.set 'model', model

)
`export default userReviews`
