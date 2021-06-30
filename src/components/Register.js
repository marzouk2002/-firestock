import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Options from './layout/Options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
                    </main>
                </div>
            } 
        </div>
    )
}

export default Register