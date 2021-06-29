import React from 'react'

function Options() {
    return (
        <div className="options-wrapper">
            <header>
                <h2>Select an Option</h2>
            </header>
            <main>
                <div className="sections">
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
                </div>
                <div className="sections">
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
                </div>
            </main>
        </div>
    )
}

export default Options