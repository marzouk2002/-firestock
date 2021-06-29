import React from 'react'

function Options() {
    return (
        <div className="options-wrapper">
            <header>
                <h2>Select an Option</h2>
            </header>
            <main>
                <div class="sections" id="s1">
                    <div class="price_holder">
                        <div class="price">10</div>
                        <div class="description">BASIC</div>
                    </div>
                    <div class="divider"></div>
                    <div class="features">
                        <div class="have">Feature A</div>
                        <div class="have">Feature B</div>
                        <div class="dont">Feature C</div>
                        <div class="dont">Feature D</div>
                        <div class="dont">Feature E</div>
                        <div class="dont">Feature F</div>
                    </div>
                    <button class="cta">Start Today</button>
                </div>
                    <div class="sections" id="s2">
                    <div class="most">MOST POPULAR</div>
                    <div class="price_holder">
                        <div class="price">20</div>
                        <div class="description">PROFESSIONAL</div>
                    </div>
                    <div class="divider"></div>
                    <div class="features">
                        <div class="have">Feature A</div>
                        <div class="have">Feature B</div>
                        <div class="have">Feature C</div>
                        <div class="have">Feature D</div>
                        <div class="dont">Feature E</div>
                        <div class="dont">Feature F</div>
                    </div>
                    <button class="cta">Start Today</button>
                </div>
            </main>
        </div>
    )
}

export default Options