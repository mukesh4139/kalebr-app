`import DS from "ember-data"`

optionModel = DS.Model.extend(
  statement: DS.attr('string')
  selected: DS.attr('boolean', {defaultValue: false})
  _destroy: DS.attr('boolean', {defaultValue: false})
)

`export default optionModel`
