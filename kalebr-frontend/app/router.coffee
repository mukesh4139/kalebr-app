`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend(location: config.locationType, rootURL: config.rootURL)

Router.map ->
  @route 'users'#, path: '/'
  @route 'login', path: '/'

`export default Router`
