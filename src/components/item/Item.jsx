import React from 'react'
import './item.scss'
export const Item = ({ name, price, imageUrl }) => {
    return (
        <div className='collection-item'>
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

        </div>
    )
}
