import React from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from "react-icons/fa";

function Alert({ alert, setAlert }) {
    return (
        <motion.div initial={{opacity:0, scale:0.5}}
        animate={{opacity: 1, scale:1}} transition={{duration: 0.8}} 
        className="alert-wrapper">
            <p>{alert}</p>
            <FaTimes onClick={()=>setAlert(null)}/>
        </motion.div>
    )
}

export default Alert