'use strict';

require('es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var App = require('./components/App.jsx');

var Iso = require('iso');
var alt = require('./alt');

Iso.bootstrap(function (state, meta, container) {
    alt.bootstrap(state);
    React.render(React.createElement(App), container);
});
