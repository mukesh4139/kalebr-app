`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

applicationRoute = Ember.Route.extend(
  beforeModel: ->
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
        unless data.errors
          normalizedData = self.store.normalize('user', data.user)
          currUser = self.store.push(normalizedData)
          self.get('session').set 'currentUser', currUser
          console.log(data.user.email, 'logged in')
        else
          console.log(data.errors[0])
          self.replaceWith('login')

      error: (msg)  ->
        console.log(data.errors[0])
        self.replaceWith('login')
    )

  actions:
    logout: ->
      console.log('logging out ', @get('session.currentUser.email'))
      @get('session').set 'currentUser', undefined
      window.localStorage.setItem('auth_token', null)
      @replaceWith('login')
)

`export default applicationRoute`

