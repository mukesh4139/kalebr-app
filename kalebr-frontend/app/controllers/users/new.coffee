`import Ember from 'ember'`

userNew = Ember.Controller.extend
  invalidPasswordMsg: 'Password should be of Min. 6 Chars'

  # Password is invalid for a user if password length is less than 6
  # While Editing user, admin may leave password as blank if wish not to update

  checkPasswordValidity: ->
    validity = false
    if @get('model.id')
      if @get('model.password') == undefined or @get('model.password.length') >= 6 or @get('model.password.length') == 0
        validity = true
    else if @get('model.password.length') >= 6
      validity = true
    @set('passwordValid', validity)
    return validity

  actions:
    createNewUser: ->
      self = @
      if @get('model.isValid') and @checkPasswordValidity()
        @set 'showErrors', false
        @get('model').save().then (response) ->
          self.transitionToRoute('users')
      else
        @set 'showErrors', true
      false

`export default userNew`
