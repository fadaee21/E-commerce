import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/user'
export const Header = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector((state) => state.user.value)

    const history = useHistory()
    const out = async () => {
        await signOut(auth)
        dispatch(logout({ email: "", password: "", displayName: "" }))
        localStorage.setItem("user", "")
        history.push("/")
    };


    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className="logo" />
            </Link>
            <h1>welcome {currentUser.displayName}</h1>
            <div className="options">
                <Link className='option' to="/shop" >SHOP</Link>
                <Link className='option' to="/" >CONTACT</Link>
                {currentUser.email
                    ? <div className='option'
                        onClick={out} >
                        SIGN OUT</div>

                    : <Link className='option' to='/signin'>LOGIN</Link>}
            </div>
        </div>
    )
}
export default Header;