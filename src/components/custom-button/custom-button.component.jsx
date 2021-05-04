import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isInverted, ...otherProps }) => {
    const googleSignIn = isGoogleSignIn ? 'google-sign-in' : '';
    const inverted = isInverted ? 'ginverted' : ''

    return (
        <button
            className={`${googleSignIn} ${inverted} custom-button`}
            {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;