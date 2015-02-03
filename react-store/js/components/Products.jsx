'use strict';

var React = require('react');
var ProductStore = require('../stores/ProductStore');
var addToCartAction = require('../actions/AddToCartAction');

var ProductItem = React.createClass({

    addToCart: function () {
        addToCartAction(this.props.product);
    },

    render: function () {
        var product = this.props.product;

        return (
            <div className="uk-panel uk-panel-box uk-margin-bottom">
            <img className="uk-thumbnail uk-thumbnail-mini uk-align-left" src={product.image} />
            <h4 className="uk-h4">{product.title} - &euro;{product.price}</h4>
            <button className="uk-button uk-button-small uk-button-primary"
                onClick={this.addToCart}
                disabled={product.inventory > 0 ? '' : 'disabled'}>
                {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
            </button>
            </div>
        );
    }
});

var ProductsList = React.createClass({

    render: function () {
        var products = ProductStore.getAllProducts() || [];
        var nodes = products.map(function (product) {
            return <ProductItem key={product.id} product={product} />;
        });

        return (
            <div className="shop-wrap">
            <h2 className="uk-h2">Flux Shop Demo (React Store)</h2>
            <div>{nodes}</div>
            </div>
        );
    }
});

module.exports = ProductsList;
