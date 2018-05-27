`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

userReview = Ember.Controller.extend
  comment: ''

  actions:
    submitComment: ->
      url = constants.HOST + constants.NAMESPACE + '/reviews/' + @get('model.id') + '/comment'
      $.ajax(
        type: 'POST'
        url: url
        data: {comment: @get('comment')}
        headers:
          Authorization: "Bearer " + window.localStorage.getItem('auth_token')
        success: (response) ->
          console.log('commented')
      )

`export default userReview`
