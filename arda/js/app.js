import React from 'react';
global.React = React;
import Arda from 'arda';
import AppContext from './contexts/app'

import shop from '../../common/api/shop';

window.addEventListener("DOMContentLoaded", () => {
  let router = new Arda.Router(Arda.DefaultLayout, document.body)
  shop.getProducts(products => {
    router.pushContext(AppContext, {originalProducts: products})
  });
});
