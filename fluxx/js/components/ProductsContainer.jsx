'use strict';

var React = require('react');
var Store = require('fluxx').Store;
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var ProductStore = require('../stores/ProductStore');
var Actions = require('../actions/Actions');

var ProductsListContainer = React.createClass({
    getInitialState: function() {
        return this._stateFromStore();
    },

    componentDidMount: function () {
        this._unsub = Store.onChange(ProductStore)(this._onChange);
    },

    componentWillUnmount: function () {
        this._unsub();
    },

    _onChange: function() {
        this.setState(this._stateFromStore());
    },

    _stateFromStore: function() {
        return {
            products: ProductStore.getAllProducts()
        };
    },

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList title="Flux Shop Demo (fluxx)">
                {nodes}
            </ProductsList>
        );
    },

});

var ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        Actions.addToCart(this.props.product);
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

module.exports = ProductsListContainer;
