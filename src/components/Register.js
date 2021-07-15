import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import Options from './layout/Options'
import { TextField, Button } from '@material-ui/core';
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function Register() {
    const [ selectedOpt, setSelectedOp ] = useState(null)
    const [ formState, setFormState ] = useState({ name: '', email: '', password: '', password2: ''})
    const [ errState, setErrState ] = useState({ email: '', password: '', password2: '' })
    const { firebase, auth, firestore } = useSelector(state => state)
    const usersRef = firestore.collection('users');

    const handleFormChange = (e) => {
        const { name, value }  = e.target
        setFormState({ ...formState, [name]: value })
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        .then(async ({ user }) => {
            const { uid } = user;
            console.log(user)
            await usersRef.add({
                uid, premium: selectedOpt==='premium'
            })
        })
        .catch(error => console.log(error));
    }

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        auth.signInWithPopup(provider)
        .then(async ({ user }) => {
            const { uid } = user;
            console.log(user)
            await usersRef.add({
                uid, premium: selectedOpt==='premium'
            })
        })
        .catch(error => console.log(error));
    }

    const signInWithEmail = async (e) => {
        e.preventDefault()
        const { name, email, password, password2} = formState
        // error checking
        let errCount = false
        let objErr = { email: '', password: '', password2: '' }
        setErrState(objErr)
        if(password.length < 6) {
            objErr = {...objErr, password: "Password should be minimum 6 characters!"}
            errCount = true
        }
        if(password !== password2) {
            objErr = {...objErr, password2: "Passwords doesn't match!"}
            errCount = true
        }
        const checkDb = await auth.fetchSignInMethodsForEmail(email)
        console.log(checkDb)
        if(checkDb && checkDb.length) {
            objErr = {...objErr, email: "Email already used!"}
            errCount = true
        }
        if(errCount) {
            return setErrState(objErr)
        } else {
            auth.createUserWithEmailAndPassword(email, password)
            .then(async userCredential => {
                const { uid } = userCredential.user;
                await usersRef.add({
                    uid, name, premium: selectedOpt==='premium'
                })
              })
              .catch(error => console.log(error));
        }
    }

    return (
        <div className="container-auth">
            {
                !selectedOpt ? <Options  setSelectedOp={setSelectedOp} selectedOpt={selectedOpt}/> : 
                <div className="regisLoginForm-wrapper">
                    <header>
                        <motion.h2 initial={{opacity:0}}
                        animate={{opacity: 1}} transition={{duration: 0.8}} >
                        {selectedOpt} account</motion.h2>
                    </header>
                    <motion.main initial={{opacity:0, x:100}}
                    animate={{opacity: 1, x: 0}} transition={{duration: 0.5}} >
                        <form onSubmit={signInWithEmail} autoComplete="off">
                            <TextField onChange={handleFormChange} name="name" required value={formState.name} label="Name" style={inputStyle} variant="outlined" />
                            <TextField onChange={handleFormChange} name="email" required type="email" value={formState.email} label="Email" style={inputStyle} variant="outlined" error={Boolean(errState.email)} helperText={errState.email}/>
                            <TextField onChange={handleFormChange} name="password" required value={formState.password} label="Password" style={inputStyle} type="password" variant="outlined" error={Boolean(errState.password)} helperText={errState.password}/>
                            <TextField onChange={handleFormChange} name="password2" required value={formState.password2} label="Confirm Password" style={inputStyle} type="password" variant="outlined"  error={Boolean(errState.password2)} helperText={errState.password2}/>
                            <div className="socials">
                                <div onClick={signInWithGoogle}>
                                    <FaGoogle/>
                                    <p>Sign in with Google</p>
                                </div>
                                <div onClick={signInWithFacebook}>
                                    <FaFacebookF/>
                                    <p>Sign in with Facebook</p>
                                </div>
                            </div>
                            <div className="btns">
                                <Button variant="contained" color="primary" onClick={()=>setSelectedOp(null)} disableElevation>
                                    Go Back
                                </Button>
                                <Button variant="contained" color="primary" type="submit" disableElevation>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </motion.main>
                    <p>Already registered? <Link to="/login">Login now!</Link></p>
                </div>
            } 
        </div>
    )
}

const inputStyle = {
    width: '95%',
    margin: '0.5rem 0'
}

export default Register