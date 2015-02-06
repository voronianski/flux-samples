var Flux = require('react-flux');
var api = require('../util/api');

var Constants = Flux.createConstants([
    "CHECKOUT"
],"CART");

var CartActions = Flux.createActions({

    checkout: [Constants.CHECKOUT, function ( products ) {
        return api.checkoutProducts(products);
    }]

});

module.exports = CartActions;

module.exports.Constants = Constants;
