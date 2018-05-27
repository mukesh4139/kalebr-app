`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType, rootURL: config.rootURL)

Router.map ->
  @route 'users', path: '/users'
  @route 'login', path: '/'

  @route 'questions'
  @route 'questions/new'
  @route 'questions/edit', path: 'questions/:id/edit'

  @route 'users/new'
  @route 'users/edit', path: 'users/:id/edit'

  @route 'users/reviews', path: 'users/:id/reviews'
  @route 'users/review', path: 'users/:id/review'

  @route 'users/performanceReview', path: 'users/:id/performanceReview'
  @route 'users/othersPerformanceReviews', path: 'users/:id/othersPerformanceReviews'

  @route 'home'


`export default Router`
