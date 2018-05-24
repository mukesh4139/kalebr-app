`import Ember from 'ember'`

questionNew = Ember.Controller.extend
  actions:
    createNewQuestion: ->
      @get('model').save()

`export default questionNew`
