'use strict';

var Biff = require('../dispatcher/Biff');

var ProductActions = Biff.createActions({
    addToCart: function (product) {
        this.dispatch({
            actionType: 'ADD_TO_CART',
            product: product
        });
    }
});

module.exports = ProductActions;
