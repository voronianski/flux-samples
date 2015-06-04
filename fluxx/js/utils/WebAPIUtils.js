'use strict';

var shop = require('../../../common/api/shop');
var Actions = require('../actions/Actions');

module.exports = {
    getAllProducts: function () {
        shop.getProducts(Actions.receiveProducts);
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function() { Actions.finishCheckout(products) });
    }
};