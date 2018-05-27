`import Ember from 'ember'`

questions = Ember.Controller.extend
  actions:
    toggleOptions: (question) ->
      question.set('showOptions', !question.get('showOptions'))
      false

    deleteRecord: (record) ->
      question = record.get('content')
      question.destroyRecord()
      @get('model').removeObject(record)

`export default questions`
