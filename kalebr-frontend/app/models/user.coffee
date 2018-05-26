`import DS from "ember-data"`
`import EmberValidations from 'ember-validations'`

userModel = DS.Model.extend(EmberValidations, {
  firstname: DS.attr('string')
  lastname: DS.attr('string')
  email: DS.attr('string')
  password: DS.attr('string')
  admin: DS.attr('boolean')
  selfPerformanceReview: DS.belongsTo('performance-review', {inverse: 'reviewee'})
  othersPerformanceReviews: DS.hasMany('performance-review', {inverse: null})

  fullname: (->
    @get('firstname') + ' ' + @get('lastname')
  ).property('firstname', 'lastname')

  validations: {
    firstname: {
      presence: true
    }
    email: {
      presence: true
      format: { with: /^((?!\.)[a-z0-9._%+-]+(?!\.)\w)@[a-z0-9-]+\.[a-z.]{1,5}(?!\.)\w$/, message: 'Not a valid email'}
    }
  }
})

`export default userModel`
