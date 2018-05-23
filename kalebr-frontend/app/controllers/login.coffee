`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

login = Ember.Controller.extend

  emailIsValid: (->
    @get('email').length > 0
  ).property('email')

  passwordIsValid: (->
    @get('password').length > 0
  ).property('password')

  validLogin: (->
    @get('emailIsValid') and @get('passwordIsValid')
  ).property('emailIsValid', 'passwordIsValid')

  actions:
    login: ->
      if @get('validLogin')
        user = {}
        user.email = @get('email')
        user.password = @get('password')
        $.ajax(
          type: 'POST'
          url: constants.USER_SIGN_IN_URL
          data: user
        )
        success: (data) ->
          debugger

        error: ()->
          debugger

      else
        unless @get('emailIsValid')
          alert 'Invalid Email'

        else if !@get('passwordIsValid')
          alert 'Invalid Password'

    cancel : ->
      window.history.back()

`export default login`
