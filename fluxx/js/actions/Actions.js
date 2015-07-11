'use strict';

var Action = require('fluxx').Action;

module.exports = Action.create(
    'receiveProducts',
    'addToCart',
    'cartCheckout',
    'finishCheckout'
);