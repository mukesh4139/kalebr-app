`import DS from "ember-data"`

questionModel = DS.Model.extend(
  statement: DS.attr('string')
  options: DS.hasMany('option')
)

`export default questionModel`
