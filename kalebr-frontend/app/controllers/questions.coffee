`import Ember from 'ember'`
`import constants from "kalebr-frontend/utils/constants"`

questions = Ember.Controller.extend
  actions:
    toggleOptions: (question) ->
      question.set('showOptions', !question.get('showOptions'))
      false

`export default questions`
