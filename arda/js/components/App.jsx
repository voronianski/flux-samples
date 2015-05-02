import React from 'react';
import Arda from 'arda';

import Cart from '../../../common/components/Cart.jsx';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

let App = React.createClass({
    mixins: [Arda.mixin],
    onCheckoutClicked: function() {
      this.dispatch('checkout');
    },

    render() {
        let self = this;
        let {products, total} = this.props;

        return (
            <div>
                <Cart
                    products={products.filter(p => p.quantity > 0)}
                    total={total}
                    onCheckoutClicked={this.onCheckoutClicked}
                />

                <ProductsList title="Flux Shop Demo (Arda)">
                    {
                        products.map((product, i) => {
                            let onAddToCart = () => {
                                self.dispatch('addToCart', product.id);
                            };
                            return (
                                <ProductItem
                                    key={'product-'+i}
                                    product={product}
                                    onAddToCartClicked={onAddToCart}
                                />
                            );
                        })
                    }
                </ProductsList>
            </div>
        );
    }
});

export default App;
