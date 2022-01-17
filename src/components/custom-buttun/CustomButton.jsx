import React from 'react'
import './customButton.scss'
export const CustomButton = ({children, ...rest}) => {
    return (
        <button className='custom-button' {...rest}>
            {children}
        </button>
    )
}
