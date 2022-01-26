import React from 'react'
import { SignIn } from '../../components/sign-in/SingIn'
import { SignUp } from '../../components/sign-up/SignUp'
import './sign.scss'
export const Sign = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
