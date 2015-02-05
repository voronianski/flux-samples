'use strict';

var React = require('react');
var Store = require('react-store');
var Cart = require('./Cart.jsx');
var Products = require('./Products.jsx');

var App = React.createClass({
    componentDidMount: function() {
      Store.init({
        rootComponent: this
      });
    },

    render: function () {
        return (
            <div>
                <Products />
                <Cart />
            </div>
        );
    }
});

module.exports = App;
