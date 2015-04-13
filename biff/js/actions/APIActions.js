'use strict';

var Biff = require('../dispatcher/Biff');

var ProductActions = Biff.createActions({
    receiveProducts: function (products) {
        this.dispatch({
            actionType: 'RECEIVE_PRODUCTS',
            products: products
        });
    },
    finishCheckout: function (products) {
        this.dispatch({
            actionType: 'SUCCESS_CHECKOUT',
            products: products
        });
    }
});

module.exports = ProductActions;
