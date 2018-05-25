`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

applicationRoute = Ember.Route.extend(
  setupController: ->
    return @getCurrentUser()

  getCurrentUser: () ->
    self = @
    auth_token = window.localStorage.getItem('auth_token')
    $.ajax(
      type: 'POST'
      url: constants.LOGGED_IN_USER_URL
      headers:
        Authorization: "Bearer " + auth_token
      success: (data) ->
        console.log(data.user.email, 'logged in')

      error: (msg)  ->
        console.log(msg.responseJSON.errors[0])
        self.replaceWith('login')
    )
)

`export default applicationRoute`

