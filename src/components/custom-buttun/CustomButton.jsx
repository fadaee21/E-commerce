import React from 'react'
import './customButton.scss'
export const CustomButton = ({children, isGoogleSignIn, ...rest}) => {
    return (
        <button className={`custom-button  ${isGoogleSignIn ? 'google-sign-in' : ''} `} {...rest}>
            {children}
        </button>
    )
}
