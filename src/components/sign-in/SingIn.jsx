import React from 'react'
import { FormInput } from '../form-input/FormInput'
import { CustomButton } from '../custom-buttun/CustomButton'
import './singIn.scss'
export const SignIn = () => {

    const [input, setInput] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setInput(old => ({ ...old, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("hello")
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span className='title'>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={input.email}
                    label={"Email"}
                    required />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={input.password}
                    label={"Password"}
                    required />
                <CustomButton type="submit">Sign in</CustomButton>
            </form>
        </div>
    )
}
