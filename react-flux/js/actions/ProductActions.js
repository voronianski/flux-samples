'use strict';

var Flux = require('react-flux');
var api = require('../util/api');

var Constants = Flux.createConstants([
    "ADD_TO_CART",
    "GET_ALL"
],"PRODUCT");

var ProductActions = Flux.createActions({

    addToCart: [Constants.ADD_TO_CART, function ( product ) {
        return product;
    }],

    getAll: [Constants.GET_ALL, function () {
        return api.getAllProducts();
    }]

});

module.exports = ProductActions;

module.exports.Constants = Constants;
