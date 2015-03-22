import Arda from 'arda'
import AppComponent from '../components/App.jsx'
import subscriber from './subscriber'

export default class ArdaContext extends Arda.Context {
    get subscribers() { return [subscriber]; }
    get component() { return AppComponent; }

    initState(props) {
        return {
            inCartIds: [],
            soldIds: []
        };
    }

    expandComponentProps(props, state) {
        let products = props.originalProducts.map(product => {
            let soldCount = state.soldIds.filter(id => id === product.id).length;
            let inCartCount = state.inCartIds.filter(id => id === product.id).length;
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: inCartCount,
                inventory: product.inventory - soldCount - inCartCount
            };
        });

        let total = state.inCartIds.reduce((sum, id) => {
            let product = props.originalProducts.filter(p => p.id === id)[0];
            return sum + product.price;
        }, 0);

        return {
            total: total.toString(),
            products: products
        };
    }
}
