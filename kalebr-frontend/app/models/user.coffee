`import DS from "ember-data"`

userModel = DS.Model.extend(
  firstname: DS.attr('string')
  lastname: DS.attr('string')
  email: DS.attr('string')
)

`export default userModel`
