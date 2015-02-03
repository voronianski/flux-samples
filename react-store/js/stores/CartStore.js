'use strict';

var Store = require('react-store');
var Q = require('q');
var shop = require('../../../common/api/shop');
var assign = require('object-assign');

var CartStore = Store.extend({

    _products: {},

    getAddedProducts: function() {
        return Object.keys(this._products).map(function (id) {
            return this._products[id];
        }.bind(this));
    },

    addToCart: function(product) {
        var id = product.id;
        product.quantity = id in this._products ? this._products[id].quantity + 1 : 1;
        this._products[id] = assign({}, product[id], product);
        this.updateRootComponent();
    },

    getTotal: function() {
        var total = 0;
        for (var id in this._products) {
            var product = this._products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    },

    cartCheckout: function() {
        var productsBought = this.getAddedProducts();

        if (!productsBought.length) {
          return;
        }

        var deferredRequest = Q.defer();

        shop.buyProducts(productsBought, function () {
            console.log('YOU BOUGHT:', productsBought);
            this._products = {};
            deferredRequest.resolve();
        }.bind(this));

        this.updateRootComponent(deferredRequest.promise);
    }

});

module.exports = CartStore;