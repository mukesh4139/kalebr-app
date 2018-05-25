`import Ember from 'ember'`

userEdit = Ember.Route.extend(
  model: (params)->
    @get('store').findRecord('user', params.id)


  renderTemplate :->
    @render('users.new', {
      controller: 'users.edit'
    })

  setupController: (controller, model) ->
    controller.set 'model', model

)
`export default userEdit`
