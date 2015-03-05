var bulk = require('bulk-require');
var resources = bulk(__dirname, ['resources/*']).resources
  , data = { 'content-type': 'application/data' }
  , js = { 'content-type': 'application/javascript' }

Object
  .keys(resources)
  .forEach(register)

function register(name) {
  ripple({ 
    name: name
  , headers: js
  , body: resources[name]
  })
}

ripple({ 
  name: 'products'
, headers: data
, body: require('./data/products.json')
})

ripple({ 
  name: 'cart'
, headers: data
, body: []
})