import React, { useState } from 'react'
import { motion } from 'framer-motion'
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../images/logo.png'

function Options({setSelectedOp, selectedOpt}) {
    const [ anim, setAnim ] = useState({})

    
    const handleBtnClick = (e) => {
        const { value } = e.target

        setAnim({ scale: 0.5, opacity:0 })
        setTimeout(()=>setSelectedOp(value), 500)
    }

    const onToken = (token) => {

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
                        <div className="have">Stock prices</div>
                        <div className="have">Multiple time scales</div>
                        <div className="dont">Any currency</div>
                        <div className="dont">Predict future values</div>
                        
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
                        <div className="have">Stock prices</div>
                        <div className="have">Multiple time scales</div>
                        <div className="have">Any currency</div>
                        <div className="have">Predict future values</div>
                    </div>
                    <StripeCheckout
                    token={onToken}
                    stripeKey={process.env.PUB_STR_K}
                    amount="1000"
                    image= {Logo}
                    name="FireStock Premium Account"
                    description="Monthly Subscription for $10"
                    locale="auto">
                        <button className="cta" value="Premium">Start Today</button>
                    </StripeCheckout>
                </motion.div>
            </main>
        </motion.div>
    )
}

export default Options