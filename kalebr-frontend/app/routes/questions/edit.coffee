`import Ember from 'ember'`

questionEdit = Ember.Route.extend(
  model: (params)->
    @get('store').findRecord('question', params.id)


  renderTemplate :->
    @render('questions.new', {
      controller: 'questions.edit'
    })

  setupController: (controller, model) ->
    controller.set 'model', model
    noOfOptions = model.get('options.length')
    if noOfOptions < 4
      for i in [1..(4 - noOfOptions)]
        option = @get('store').createRecord('option')
        model.get('options').pushObject(option)
)
`export default questionEdit`
