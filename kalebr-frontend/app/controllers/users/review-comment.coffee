`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

userReviewComment = Ember.Controller.extend
  comment: ''

  actions:
    submitComment: ->
      self = @
      url = constants.HOST + constants.NAMESPACE + '/reviews/' + @get('model.id') + '/comment'
      $.ajax(
        type: 'POST'
        url: url
        data: {comment: @get('comment')}
        headers:
          Authorization: "Bearer " + window.localStorage.getItem('auth_token')
        success: (response) ->
          self.get('model').set 'feedback', self.get('comment')
      )


`export default userReviewComment`
