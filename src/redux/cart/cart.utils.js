export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(x => x.id === cartItemToAdd.id);

    if (existingCartItem)
        return cartItems.map(cartItem => {
            if (cartItem.id !== cartItemToAdd.id)
                return cartItem;

            return {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }
        });

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}