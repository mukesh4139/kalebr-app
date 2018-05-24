`import Ember from 'ember'`


# This function receives the params `params, hash`
adder = (params) ->
  params[0] + params[1]

Adder = Ember.Helper.helper adder
`export { adder }`

`export default Adder`
