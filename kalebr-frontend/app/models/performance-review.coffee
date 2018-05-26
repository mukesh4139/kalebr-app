`import DS from "ember-data"`

performanceReviewModel = DS.Model.extend(
  reviewee: DS.belongsTo('user', {async: true})
  reviewers: DS.hasMany('user', {async: true, inverse: null})
)

`export default performanceReviewModel`
