'use strict';

var React = require('react');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');


var ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        ProductActions.addToCart(this.props.product);
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({
    mixins: [ProductStore.mixin()],

    getStateFromStores: function () {
        return {
            products: ProductStore.getAllProducts()
        };
    },

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList title="Flux Shop Demo (React-Flux)">
                {nodes}
            </ProductsList>
        );
    }
});

module.exports = ProductsListContainer;
