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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(x => x.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1)
        return clearItemFromCart(cartItems, cartItemToRemove);

    return cartItems.map(cartItem => {
        if (cartItem.id !== cartItemToRemove.id)
            return cartItem;

        return {
            ...cartItem,
            quantity: cartItem.quantity - 1
        }
    });

}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}
