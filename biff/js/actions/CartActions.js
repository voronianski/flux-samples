'use strict';

var Biff = require('../dispatcher/Biff');
var WebAPIUtils = require('../utils/WebAPIUtils');

var CartActions = Biff.createActions({
    cartCheckout: function (products) {
        WebAPIUtils.checkoutProducts(products);
        this.dispatch({
            actionType: 'CART_CHECKOUT',
            products: products
        });
    }
});

module.exports = CartActions;
