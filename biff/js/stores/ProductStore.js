'use strict';

var Biff = require('../dispatcher/Biff');

var _products = [];

function _decreaseInventory (product) {
    product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
}

var ProductStore = Biff.createStore({
    getAllProducts: function () {
        return _products;
    }
}, function (payload) {

    switch (payload.actionType) {
        case 'RECEIVE_PRODUCTS':
            _products = payload.products;
            this.emitChange();
            break;
        case 'ADD_TO_CART':
            _decreaseInventory(payload.product);
            this.emitChange();
            break;
        default:
    }

});

module.exports = ProductStore;
