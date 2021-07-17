import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import $ from 'jquery'
// images
import logo from '../images/logo.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import github from '../images/github.svg'
import linkedIn from '../images/linkedIn.svg'

export default function Home() {
    const { auth } = useSelector(state => state)
    const [ user ] = useAuthState(auth)

    const ScrollEffect = (e) => {
        e.preventDefault();

        let destination = $(e.target.hash);
    
        let scrollPosition = destination.offset().top ;
    
        let animationDuration = 500;
    
        $('html, body').animate({
            scrollTop: scrollPosition
        }, animationDuration);
    }

    const logout = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container-home">
            <header>
                <img src={logo} alt="logo" className="logo"/>
                <nav>
                    <a onClick={ScrollEffect} href="#about">about</a>
                    {
                        !user ? 
                        <><Link to="/dashboard">dashboard</Link>
                        <Link to="/" onClick={logout}>logout</Link></> : 
                        <><Link to="/register">register</Link>
                        <Link to="/login">login</Link></>
                    }
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
                            <p>check stock</p>
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
                <section className="sec-3" id="about">
                    <div className="content">
                        <p>FireStock is a website that provides an insight into the stock market by giving the values of stocks in different time scales and currencies. And it goes as far as predicting the stoke values using a trained neural network.</p>
                        <div className="btns">
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="content">
                    <div className="social-links">
                        <Link to="#"><img src={facebook} alt=""/></Link>
                        <Link to="#"><img src={twitter} alt=""/></Link>
                        <Link to="#"><img src={github} alt=""/></Link>
                        <Link to="#"><img src={instagram} alt=""/></Link>
                        <Link to="#"><img src={linkedIn} alt=""/></Link>
                    </div>
                    <div>
                        <p>© Untitled | Development : <a href="https://github.com/marzouk2002" rel="noreferrer" target="_blank">Youssouf MARZOUK</a></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
