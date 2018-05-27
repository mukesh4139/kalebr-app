`import DS from "ember-data"`

questionsOption = DS.Model.extend(
  review: DS.belongsTo('review')
  question: DS.belongsTo('question')
  option: DS.belongsTo('option')
)

`export default questionsOption`
