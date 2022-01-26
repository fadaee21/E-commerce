import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link ,useHistory } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { signOut } from 'firebase/auth'

export const Header = ({ currentUser }) => {
const history = useHistory()
    const out = async () => {
        await signOut(auth)
        history.push("/")
    };


    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className='option' to="/shop" >SHOP</Link>
                <Link className='option' to="/shop" >CONTACT</Link>
                {currentUser
                    ? <div className='option'
                        onClick={out}>
                        SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>}
            </div>
        </div>
    )
}
