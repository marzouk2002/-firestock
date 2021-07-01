import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { TextField, Button } from '@material-ui/core';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Alert from './layout/Alert';

function Login() {
    const [ formState, setFormState ] = useState({ email: '', password: '' })
    const [ alert, setAlert ] = useState('Sorry, no user with that email')

    const handleFormChange = (e) => {
        const { name, value }  = e.target
        setFormState({ ...formState, [name]: value })
    }

    return (
        <div className="container-auth">
            <div className="regisLoginForm-wrapper">
                    <header>
                        <motion.h2 initial={{opacity:0}}
                        animate={{opacity: 1}} transition={{duration: 0.8}} >
                        Login</motion.h2>
                    </header>
                    {alert && <Alert alert={alert} setAlert={setAlert}/>}
                    <motion.main initial={{opacity:0, x:100}}
                    animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.1}} >
                        <form autoComplete="off">
                            <TextField onChange={handleFormChange} name="email" value={formState.email} label="Email" style={inputStyle} variant="outlined" />
                            <TextField onChange={handleFormChange} name="password" value={formState.password} label="Password" style={inputStyle} type="password" variant="outlined" />
                            <div className="socials">
                                <div>
                                    <FaGoogle/>
                                    <p>Login with Google</p>
                                </div>
                                <div>
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