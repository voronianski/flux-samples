'use strict';

var React = require('react');
var Store = require('fluxx').Store;
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var Actions = require('../actions/Actions');
var WebAPIUtils = require('../utils/WebAPIUtils');

var CartContainer = React.createClass({
    getInitialState: function() {
        return this._stateFromStore();
    },

    componentDidMount: function () {
        this._unsub = Store.onChange(CartStore)(this._onChange);
    },

    componentWillUnmount: function () {
        this._unsub();
    },

    _onChange: function () {
        this.setState(this._stateFromStore());
    },

    _stateFromStore: function() {
        return {
            products: CartStore.getAddedProducts(),
            total: CartStore.getTotal()
        };
    },

    onCheckoutClicked: function () {
        var products = this.state.products;
        if (!products.length) return;

        Actions.cartCheckout(products);
        WebAPIUtils.checkoutProducts(products);
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    }
});

module.exports = CartContainer;
