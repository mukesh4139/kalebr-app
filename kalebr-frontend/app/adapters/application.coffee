`import DS from "ember-data"`
`import constants from "kalebr-frontend/utils/constants"`
`import ActiveModelAdapter from 'active-model-adapter'`

adapter = ActiveModelAdapter.extend
  host: constants.HOST
  namespace: constants.NAMESPACE
  headers: {
    Authorization: "Bearer " + window.localStorage.getItem('auth_token')
  }

  handleResponse: (status, headers, payload) ->
    if (this.isInvalid(status, headers, payload))
      if (status == 422 || status == 500)
        alert payload.message
    else
      this._super(status, headers, payload)

`export default adapter`
