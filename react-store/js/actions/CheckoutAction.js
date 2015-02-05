'use strict';

var CartStore = require('../stores/CartStore');

var CheckoutAction = function() {
    CartStore.cartCheckout();
};


module.exports = CheckoutAction;
