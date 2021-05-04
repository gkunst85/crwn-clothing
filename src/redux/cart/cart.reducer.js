import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils'

const INITIAl_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAl_STATE, action) => {
    const { payload } = action;
    const { cartItems, hidden } = state;

    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !hidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(cartItems, payload)
            }

        default:
            return state;
    }
}

export default cartReducer;