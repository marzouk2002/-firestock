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

        </div>
    )
}
