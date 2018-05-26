`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

login = Ember.Controller.extend

  reset: ->
    @set 'email', undefined
    @set 'password', undefined

  emailIsValid: (->
    @get('email.length') > 0
  ).property('email')

  passwordIsValid: (->
    @get('password.length') > 0
  ).property('password')

  validLogin: (->
    @get('emailIsValid') and @get('passwordIsValid')
  ).property('emailIsValid', 'passwordIsValid')

  actions:
    login: ->
      self = @
      if @get('validLogin')
        user = {}
        user.email = @get('email')
        user.password = @get('password')
        $.ajax(
          type: 'POST'
          url: constants.USER_SIGN_IN_URL
          data: user
          success: (data) ->
            if data.user and data.auth_token
              window.localStorage.setItem('auth_token', data.auth_token)
              normalizedData = self.store.normalize('user', data.user)
              currUser = self.store.push(normalizedData)
              self.get('session').set 'currentUser', currUser
              self.transitionToRoute('home')

          error: (msg)->
            alert msg.responseJSON.errors[0]
        )

      else
        unless @get('emailIsValid')
          alert 'Invalid Email'

        else if !@get('passwordIsValid')
          alert 'Invalid Password'

`export default login`
