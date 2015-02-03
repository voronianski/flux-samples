'use strict';

var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');

var AddToCartAction = function(product) {
    if (ProductStore.removeFromInventory(product)) {
      CartStore.addToCart(product);
    }
};


module.exports = AddToCartAction;
