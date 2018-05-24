`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType, rootURL: config.rootURL)

Router.map ->
  @route 'users'
  @route 'login', path: '/login'

  @route 'users/new'
  @route 'questions'
  @route 'questions/new'

`export default Router`
