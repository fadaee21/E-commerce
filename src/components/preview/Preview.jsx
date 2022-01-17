import React from 'react'
import './Preview.scss'
import { Item } from '../item/Item'
export const Preview = ({ items, title }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.slice(0,4).map(({id, name, price, imageUrl}) => 
                     <Item key={id} name={name} price={price} imageUrl={imageUrl} />
                )}
            </div>
        </div>
    )
}
