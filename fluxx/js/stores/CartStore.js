'use strict';

var Store = require('fluxx').Store;
var assign = require('object-assign');

var ProductStore = require('./ProductStore');
var Actions = require('../actions/Actions');

var CartStore = Store(function(on, dependOn) {
    dependOn(ProductStore);

    var products = {};

    on(Actions.addToCart, function(product) {
        var id = product.id;
        product.quantity = id in products ? products[id].quantity + 1 : 1;
        products[id] = assign({}, product);
    });

    on(Actions.cartCheckout, function() {
        products = {};
    });

    on(Actions.finishCheckout, function(products) {
        console.log('YOU BOUGHT:', products);
    });

    function getAddedProducts() {
        return Object.keys(products).map(function (id) {
            return products[id];
        });
    }

    function getTotal() {
        var total = Object.keys(products).reduce(function(total, id) {
            var product = products[id];
            return total + product.price * product.quantity;
        }, 0);

        return total.toFixed(2);
    }

    return {
        getAddedProducts: getAddedProducts,
        getTotal: getTotal
    };
});

module.exports = CartStore;
