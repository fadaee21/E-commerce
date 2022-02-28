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
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user'
import { useHistory } from 'react-router-dom'

export const SignIn = () => {
    const dispatch = useDispatch()
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
                var tt = noteSnapshot.data();
                
            } else {
                console.log("Note doesn't exist");
            }
        } catch (error) {
            console.log(error.message);
        }
        
        dispatch(login({ email: loginEmail, password: loginPassword, displayName: tt.displayName }))
        setLocalStorage("user", { email: loginEmail, password: loginPassword, displayName: tt.displayName })
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


    const setLocalStorage = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.error({ e })
        }
    }


    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
        history.push("/")
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
                    <CustomButton type="submit"

                    >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        Sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}
