`import Ember from 'ember'`

questions = Ember.Controller.extend
  actions:
    toggleOptions: (question) ->
      question.set('showOptions', !question.get('showOptions'))
      false

    deleteRecord: (record) ->
      record.get('content').destroyRecord()

`export default questions`
