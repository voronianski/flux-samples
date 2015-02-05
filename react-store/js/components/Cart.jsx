'use strict';

var React = require('react');
var CartStore = require('../stores/CartStore');
var checkoutAction = require('../actions/CheckoutAction');

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

var Cart = React.createClass({

    checkout: function () {
        checkoutAction();
    },

    render: function () {
        var products = CartStore.getAddedProducts();

        var hasProducts = products.length > 0;
        var nodes = !hasProducts ?
            <div>Please add some products to cart.</div> :
            products.map(function (p) {
                return <Product key={p.id}>{p.title} - &euro;{p.price} x {p.quantity}</Product>;
            });

        return (
            <div className="cart uk-panel uk-panel-box uk-panel-box-primary">
            <div className="uk-badge uk-margin-bottom">Your Cart</div>
            <div className="uk-margin-small-bottom">{nodes}</div>
            <div className="uk-margin-small-bottom">Total: &euro;{CartStore.getTotal()}</div>
                <button className="uk-button uk-button-large uk-button-success uk-align-right"
                    onClick={this.checkout}
                    disabled={hasProducts ? '' : 'disabled'}>
                    Checkout
                </button>
            </div>
        );
    }
});

module.exports = Cart;
