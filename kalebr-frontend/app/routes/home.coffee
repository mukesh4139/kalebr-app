`import Ember from 'ember'`

home = Ember.Route.extend(
  beforeModel: ->
    unless @get('session.currentUser')
      @transitionTo('login')
)

`export default home`
