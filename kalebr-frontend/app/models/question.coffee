`import DS from "ember-data"`
`import EmberValidations from 'ember-validations'`

questionModel = DS.Model.extend(EmberValidations, {
  statement: DS.attr('string')
  options: DS.hasMany('option')

  validations: {
    statement: {
      presence: true
    }
  }
})

`export default questionModel`
