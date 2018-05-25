`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType, rootURL: config.rootURL)

Router.map ->
  @route 'users'
  @route 'login', path: '/login'

  @route 'users/new'
  @route 'questions'
  @route 'questions/new'
  @route 'questions/edit', path: 'questions/:id/edit'
  @route 'users/edit', path: 'users/:id/edit'

`export default Router`
