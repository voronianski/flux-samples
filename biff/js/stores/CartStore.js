'use strict';

var Biff = require('../dispatcher/Biff');
var Dispatcher = Biff.dispatcher;
var ProductStore = require('./ProductStore');
var assign = require('object-assign');


var _products = {};

function _addToCart (product) {
    var id = product.id;
    product.quantity = id in _products ? _products[id].quantity + 1 : 1;
    _products[id] = assign({}, product[id], product);
}

var CartStore = Biff.createStore({
    getAddedProducts: function () {
        return Object.keys(_products).map(function (id) {
            return _products[id];
        });
    },

    getTotal: function () {
        var total = 0;
        for (var id in _products) {
            var product = _products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    },
}, function (payload) {

    switch (payload.actionType) {
        case 'ADD_TO_CART':
            Dispatcher.waitFor([ProductStore.dispatcherID]);
            _addToCart(payload.product);
            this.emitChange();
            break;
        case 'CART_CHECKOUT':
            _products = {};
            this.emitChange();
            break;
        case 'SUCCESS_CHECKOUT':
            // this can be used to redirect to success page, etc.
            console.log('YOU BOUGHT:', payload.products);
            break;
        default:
    }

});

module.exports = CartStore;
