import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import '../cart-dropdown/cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {

    const handleClick = () => {
        history.push('/checkout');

        toggleCartHidden();
    }

    let cartItemsContent = <span className="empty-meesage">Your cart is empty</span>;
    if (cartItems.length)
        cartItemsContent = cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />));

    return (
        <div className='cart-dropdown'>
            <div className="cart-items" >
                {cartItemsContent}
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));