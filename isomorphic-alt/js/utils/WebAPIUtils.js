'use strict';

var shop = require('../../../common/api/shop');
var ActionCreators = require('../actions/ActionCreators');
var Promise = require('es6-promise').Promise;

module.exports = {
    getAllProducts: function (cb) {
        return new Promise(function (resolve) {
            shop.getProducts(resolve);
        });
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function () {
            ActionCreators.finishCheckout(products);
        });
    }
};
