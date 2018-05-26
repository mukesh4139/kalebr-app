`import Ember from 'ember'`

userReviews = Ember.Route.extend(
  model: (params) ->
    @get('store').findRecord('user', params.id)

  setupController: (controller, model) ->
    controller.set 'model', model

)
`export default userReviews`
