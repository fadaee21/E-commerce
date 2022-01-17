import React from 'react'
import SHOP_DATA from './shopList'
import { Preview } from '../../components/preview/Preview'
export const Shop = () => {

    return (
        <div className='shop-page'>
            {SHOP_DATA.map(({id, ...rest}) => {
                return <Preview key={id} {...rest} />
            })}
        </div>
    )
}
export default Shop