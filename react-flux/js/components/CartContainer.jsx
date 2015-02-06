'use strict';

var React = require('react');
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var CartActions = require('../actions/CartActions');

var CartContainer = React.createClass({
    mixins: [CartStore.mixin()],

    getStateFromStores: function () {
        return {
            products: CartStore.getAddedProducts(),
            total: CartStore.getTotal()
        };
    },

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
            return;
        }
        CartActions.checkout(this.state.products);
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    }
});

module.exports = CartContainer;
