`import DS from 'ember-data'`
`import { ActiveModelSerializer } from 'active-model-adapter'`

ApplicationSerializer = ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin,
  attrs:
    options: {embedded: 'always'}, reviewers: { serialize: 'ids', deserialize: 'ids'}
)

`export default ApplicationSerializer`
