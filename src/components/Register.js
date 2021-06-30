import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Options from './layout/Options'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

function Register() {
    const [ selectedOpt, setSelectedOp ] = useState(null)

    return (
        <div className="container-auth">
            {
                !selectedOpt ? <Options  setSelectedOp={setSelectedOp} selectedOpt={selectedOpt}/> : 
                <div className="registerForm-wrapper">
                    <header>
                        <motion.h2 initial={{opacity:0}}
                        animate={{opacity: 1}} transition={{duration: 0.8}} >
                        Creating a {selectedOpt} account</motion.h2>
                    </header>
                    <main>
                        <form autoComplete="off">
                            <TextField id="outlined-full-width" label="Name" style={inputStyle} variant="outlined" />
                            <TextField id="outlined-full-width" label="Email" style={inputStyle} variant="outlined" />
                            <TextField id="outlined-full-width" label="Password" style={inputStyle} type="password" variant="outlined" />
                            <TextField id="outlined-full-width" label="Confirm Password" style={inputStyle} type="password" variant="outlined" />
                            <div className="btns">
                                <Button variant="contained" color="primary" onClick={()=>setSelectedOp(null)} disableElevation>
                                    Go Back
                                </Button>
                                <Button variant="contained" color="primary" type="submit" disableElevation>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </main>
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