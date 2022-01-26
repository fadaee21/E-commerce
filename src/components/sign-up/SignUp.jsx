import React from "react";
import { CustomButton } from "../custom-buttun/CustomButton";
import { FormInput } from "../form-input/FormInput";
import { auth, db } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import './signUp.scss'

export const SignUp = () => {

    const [account, setAccount] = React.useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = account
        if (password !== confirmPassword) {
            alert("password doesn't match")
            return;
        }
        try {
            const user = await createUserWithEmailAndPassword(
                auth,

                email,
                password
            );
            await setDoc(doc(db, "users", user.user.uid),
                { displayName: displayName, email: email, password: password, time: Date(), id: user.user.uid })
            console.log(user);
            setAccount({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setAccount(old => ({ ...old, [name]: value }))
    };


    return (
        <div className="sign-up">
            <h2 className="title">I do not have account</h2>
            <span>sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>

                <FormInput
                    type='text'
                    name='displayName'
                    value={account.displayName}
                    onChange={handleChange}
                    label={"name"}
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={account.email}
                    onChange={handleChange}
                    label={"Email"}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={account.password}
                    onChange={handleChange}
                    label={"Password"}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={account.confirmPassword}
                    onChange={handleChange}
                    label={"Confirm Password"}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )

}