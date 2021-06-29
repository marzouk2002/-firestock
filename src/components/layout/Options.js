import React from 'react'
import { motion } from 'framer-motion'

function Options() {
    return (
        <div className="options-wrapper">
            <header>
                <motion.h2 initial={{opacity:0}}
                animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.2}} >
                    Select an Option</motion.h2>
            </header>
            <main>
                <motion.div initial={{opacity:0, y: 50}}
                animate={{opacity: 1, y:0}} transition={{duration: 0.9}} className="sections">
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
                    <button className="cta">Start Today</button>
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
                    <button className="cta">Start Today</button>
                </motion.div>
            </main>
        </div>
    )
}

export default Options