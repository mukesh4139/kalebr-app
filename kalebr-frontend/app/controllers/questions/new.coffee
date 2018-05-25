`import Ember from 'ember'`

questionNew = Ember.Controller.extend
  invalidOptionsMsg: 'Min. 2 Options Required'

  optionsValid: (->
    optionCount = 0
    @get('model.options').forEach (option) ->
      if option.get('statement.length') > 0
        optionCount += 1
    optionCount >= 2
  ).property('model.options.@each.statement')

  markBlankOptionsToBeDeleted: ->
    @get('model.options').forEach (option) ->
      if option.get('statement.length') == undefined
        option.set('_destroy', true)

  actions:
    createNewQuestion: ->
      self = @
      if @get('model.isValid') and @get('optionsValid')
        @markBlankOptionsToBeDeleted()
        @set 'showErrors', false
        @get('model').save().then (response) ->
          self.transitionToRoute('questions')
      else
        @set 'showErrors', true
      false

`export default questionNew`
