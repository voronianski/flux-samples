'use strict';

var Store = require('react-store');
var Q = require('q');
var shop = require('../../../common/api/shop');

var ProductStore = Store.extend({

    getAllProducts: function() {
        if (this._products) {
            return this._products;
        }

        var deferredRequest = Q.defer();

        shop.getProducts(function (products) {
            this._products = products;
            deferredRequest.resolve();
        }.bind(this));

        this.updateRootComponent(deferredRequest.promise);
    },

    removeFromInventory: function(product) {
        if (product.inventory <= 0) {
            return false;
        }
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
        this.updateRootComponent();
        return true;
    }

});

module.exports = ProductStore;