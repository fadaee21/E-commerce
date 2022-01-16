// import { useState } from "react"
import "./directory.scss"
import sections from "./dir"
import { MenuItem } from "../menu-item/MenuItem"
export const Directory = () => {
    // const [product, setProduct] =useState("")

    return (
        <div className="directory-menu">
            {sections.map(({ id, title, imageUrl, size }) => {
                return <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
            })}
        </div>
    )
}
