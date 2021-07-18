import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function Login() {
    const [ formState, setFormState ] = useState({ email: '', password: '' });
    const [ errState, setErrState ] = useState({ email: '', password: '' });
    const { firebase, auth } = useSelector(state => state);
    const history = useHistory();

    // redirect to dashboard
    const redDash = () => history.push('/dashboard')

    const handleFormChange = (e) => {
        const { name, value }  = e.target
        setFormState({ ...formState, [name]: value })
    }

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        auth.signInWithPopup(provider)
        .then(redDash)
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        .then(redDash)
    }

    const signInWithEmail = (e) => {
        e.preventDefault()
        setErrState({ email: '', password: ''})

        const { email, password } = formState
        auth.signInWithEmailAndPassword(email, password)
        .then(redDash)
        .catch(({code}) => {
            if (code === "auth/user-not-found") {
                setErrState({...errState, email: "Email Not found!"})
            } else if (code === "auth/wrong-password"){
                setErrState({...errState, password: "Wrong Password!"})
            }
        })
    }

    return (
        <div className="container-auth">
            <div className="regisLoginForm-wrapper">
                    <header>
                        <motion.h2 initial={{opacity:0}}
                        animate={{opacity: 1}} transition={{duration: 0.8}} >
                        Login</motion.h2>
                    </header>
                    <motion.main initial={{opacity:0, x:100}}
                    animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.1}} >
                        <form onSubmit={signInWithEmail} autoComplete="off">
                            <TextField onChange={handleFormChange} name="email" type="email" required value={formState.email} label="Email" style={inputStyle} variant="outlined"  error={Boolean(errState.email)} helperText={errState.email}/>
                            <TextField onChange={handleFormChange} name="password" value={formState.password} label="Password" style={inputStyle} type="password" required variant="outlined"  error={Boolean(errState.password)} helperText={errState.password}/>
                            <div className="socials">
                                <div onClick={signInWithGoogle}>
                                    <FaGoogle/>
                                    <p>Login with Google</p>
                                </div>
                                <div onClick={signInWithFacebook}>
                                    <FaFacebookF/>
                                    <p>Login with Facebook</p>
                                </div>
                            </div>
                            <div className="btns">
                                <Button variant="contained" color="primary" type="submit" disableElevation>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </motion.main>
                    <p>No account? <Link to="/register">Create one now!</Link></p>
                </div>
        </div>
    )
}

const inputStyle = {
    width: '95%',
    margin: '0.5rem 0'
}

export default Login