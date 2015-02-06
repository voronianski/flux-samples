'use strict';

var shop = require('../../../common/api/shop');

/**
 * ReactFlux works best with promise-based APIs.
 */
var API = {
    getAllProducts: function () {
        return new Promise(function (resolve, reject) {
            shop.getProducts(resolve);
        });
    },

    checkoutProducts: function (products) {
        return new Promise(function (resolve, reject) {
            shop.buyProducts(products, function () {
                resolve(products);
            });
        });
    }
};

module.exports = API;
