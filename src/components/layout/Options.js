import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Options({setSelectedOp, selectedOpt}) {
    const [ anim, setAnim ] = useState({})

    
    const handleBtnClick = (e) => {
        const { value } = e.target

        setAnim({ scale: 0.5, opacity:0 })
        setTimeout(()=>setSelectedOp(value), 500)
    }

    return (
        <motion.div animate={anim} transition={{duration:.6}} className="options-wrapper">
            <header>
                <motion.h2 initial={{opacity:0}}
                animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.2}} >
                    Select an Option</motion.h2>
            </header>
            <main>
                <motion.div initial={{opacity:0, y: 50}}
                animate={{opacity: 1, y:0}} transition={{duration: 0.8}} className="sections">
                    <div className="price_holder">
                        <div className="price">0</div>
                        <div className="description">BASIC</div>
                    </div>
                    <div className="divider"></div>
                    <div className="features">
                        <div className="have">Feature A</div>
                        <div className="have">Feature B</div>
                        <div className="dont">Feature C</div>
                        <div className="dont">Feature D</div>
                        
                    </div>
                    <button className="cta" value="Basic" onClick={handleBtnClick}>Start Today</button>
                </motion.div>
                <motion.div initial={{opacity:0, y: 50}}
                animate={{opacity: 1, y:0}} transition={{duration: 1}} className="sections">
                    <div className="price_holder">
                        <div className="price">10</div>
                        <div className="description">PREMIUM</div>
                    </div>
                    <div className="divider"></div>
                    <div className="features">
                        <div className="have">Feature A</div>
                        <div className="have">Feature B</div>
                        <div className="have">Feature C</div>
                        <div className="have">Feature D</div>
                    </div>
                    <button className="cta" value="Premium" onClick={handleBtnClick}>Start Today</button>
                </motion.div>
            </main>
        </motion.div>
    )
}

export default Options