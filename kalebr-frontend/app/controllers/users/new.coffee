`import Ember from 'ember'`

userNew = Ember.Controller.extend
  actions:
    createNewUser: ->
      @get('model').save()

`export default userNew`
