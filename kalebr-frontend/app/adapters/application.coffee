`import DS from "ember-data"`
`import constants from "kalebr-frontend/utils/constants"`
`import ActiveModelAdapter from 'active-model-adapter'`

adapter = ActiveModelAdapter.extend
  host: constants.HOST
  namespace: constants.NAMESPACE

  handleResponse: (status, headers, payload) ->
    this._super(status, headers, payload)

`export default adapter`
