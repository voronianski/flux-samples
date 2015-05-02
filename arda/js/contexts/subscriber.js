import shop from '../../../common/api/shop';

export default function(context, subscribe) {
    subscribe('addToCart', (productId) => {
        context.update(state => {
            state.inCartIds = state.inCartIds.concat([productId]);
            return state;
        });
    });

    subscribe('checkout', () => {
        shop.buyProducts(context.state.inCartIds, () => {
          console.log('YOU BOUGHT:', context.state.inCartIds);
          context.update(state => ({
              inCartIds: [],
              soldIds: state.soldIds.concat(state.inCartIds)
          }));
        });
    });
}
