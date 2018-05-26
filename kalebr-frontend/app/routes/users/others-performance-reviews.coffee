`import Ember from 'ember'`

othersPerformanceReviewsRoute = Ember.Route.extend
  model: (params)->
    @get('session.currentUser.othersPerformanceReviews')

  setupController: (controller, model)->
    controller.set 'model', model

`export default othersPerformanceReviewsRoute`
