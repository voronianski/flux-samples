'use strict';

var Flux = require('react-flux');
var ProductConstants = require('../actions/ProductActions').Constants;

var ProductStore = Flux.createStore({

    getAllProducts: function () {
        return this.get('products');
    },

    getInitialState: function () {
        return { products: [] };
    }

},[

    [ProductConstants.ADD_TO_CART_SUCCESS, function ( product ) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
    }],

    [ProductConstants.GET_ALL_SUCCESS, function ( products ) {
        this.setState({ products: products });
    }]

]);

module.exports = ProductStore;
