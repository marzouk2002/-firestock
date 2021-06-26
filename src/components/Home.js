import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

export default function Home() {
    return (
        <div className="container">
            <header>
                <img src={logo} alt="logo" className="logo"/>
                <nav>
                    <Link to="#">about</Link>
                    <Link to="/register">register</Link>
                    <Link to="/login">login</Link>
                </nav>
            </header>
            <main>
                <section className="sec-1">
                    <div className="content">
                        <h1>FireStock</h1>
                        <h3>the best stock info app</h3>
                        <Link to="/register">join now</Link>
                    </div>
                </section>
                <section className="sec-2">
                    <div className="card">
                        <div className="number">
                            <p>1</p>
                        </div>
                        <div className="text">
                            <p>check stoke</p>
                            <p>prices</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="number">
                            <p>2</p>
                        </div>
                        <div className="text">
                            <p>different scales</p>
                            <p>and currencies</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="number">
                            <p>3</p>
                        </div>
                        <div className="text">
                            <p>predict future</p>
                            <p>values using AI</p>
                        </div>
                    </div>
                </section>
                <section className="sec-3">
                    <div className="content">
                        <p>FireStock is a web app that provides an insight into the stock market by giving the values of stocks in different time scales and currencies. And it goes as far as predicting the stoke values is a trained neural network.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}
