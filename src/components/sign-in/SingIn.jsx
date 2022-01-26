import React from 'react'
import { useState } from 'react'
import './singIn.scss'
import { FormInput } from '../form-input/FormInput'
import { CustomButton } from '../custom-buttun/CustomButton'
import { auth, db } from '../../firebase-config'
import { setDoc, doc, getDoc } from "firebase/firestore";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const SignIn = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            const noteSnapshot = await getDoc(doc(db, 'users', auth.currentUser.uid));
            if (noteSnapshot.exists()) {
                const tt = noteSnapshot.data()
                console.log(tt.displayName);
            } else {
                console.log("Note doesn't exist");
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
            await setDoc(doc(db, "users", auth.currentUser.uid),
                { name: auth.currentUser.displayName, email: auth.currentUser.email, time: Date() })
            alert(`welcome ${auth.currentUser.displayName}`)
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
        setLoginEmail("")
        setLoginPassword("")
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={(event) => { setLoginEmail(event.target.value) }}
                    value={loginEmail}
                    label={"Email"}
                    required />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={(event) => { setLoginPassword(event.target.value) }}

                    value={loginPassword}
                    label={"Password"}
                    required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        Sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}
