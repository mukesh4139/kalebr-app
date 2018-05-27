`import DS from "ember-data"`

reviewModel = DS.Model.extend(
  feedback: DS.attr('string')
  performanceReview: DS.belongsTo('performanceReview')
  reviewer: DS.belongsTo('user', {inverse: null})
  questionsOptions: DS.hasMany('questions-option')
)

`export default reviewModel`
