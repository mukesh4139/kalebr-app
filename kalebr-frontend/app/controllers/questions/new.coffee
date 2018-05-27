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
        @get('model').save().then () ->
          # clearing non persistent options
          index = 0
          length = self.get('model.options.length')
          for i in [0..(length-1)]
            option = self.get('model.options').objectAt(index)
            if !Em.isEmpty(option) and Em.isEmpty(option.get("id"))
              self.get('model.options').objectAt(index).destroyRecord()
            else
              index = index + 1

          self.transitionToRoute('questions')
      else
        @set 'showErrors', true
      false

`export default questionNew`
