'use strict';

var Flux = require('react-flux');
var Immutable = require('Immutable');
var CartConstants = require('../actions/CartActions').Constants;
var ProductConstants = require('../actions/ProductActions').Constants;
var ProductStore = require('./ProductStore');
var assign = require('object-assign');

var CartStore = Flux.createStore({

    getInitialState: function () {
        return { cart: Immutable.Map() };
    },

    addToCart: function (product) {
        var id = product.id;
        var current = this.get('cart').get(id);

        product.quantity = current ? current.quantity + 1 : 1;

        this.setState({
            cart: this.get('cart').set(id, assign({}, product[id], product))
        });
    },

    getAddedProducts: function () {
        return this.get('cart').toArray();
    },

    getTotal: function () {
        return this.get('cart').reduce(function (sum, p) { return sum + p.price * p.quantity }, 0).toFixed(2);
    }

},[

    [ProductConstants.ADD_TO_CART_SUCCESS, [ProductStore], function ( product ) {
        this.addToCart(product);
    }],

    [CartConstants.CHECKOUT_SUCCESS, function ( products ) {
        console.log('YOU BOUGHT:', products);
        this.setState({
            cart: Immutable.Map()
        });
    }]

]);

module.exports = CartStore;
