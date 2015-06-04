'use strict';

var Store = require('fluxx').Store;
var Actions = require('../actions/Actions');

var ProductStore = Store(function(on) {

    var products = [];


    on(Actions.receiveProducts, function(newProducts) {
        products = newProducts;
    });

    on(Actions.addToCart, function(product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
    });


    function getAllProducts() {
        return products;
    }

    return {
        getAllProducts: getAllProducts
    };
});

module.exports = ProductStore;
