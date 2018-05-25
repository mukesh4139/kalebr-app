`import Ember from 'ember'`

users = Ember.Controller.extend
  actions:
    deleteRecord: (record) ->
      record.destroyRecord()

`export default users`
