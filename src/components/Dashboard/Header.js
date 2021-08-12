import React from 'react'
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <img className="user-logo" src={User} alt="user icon"/>
            </div>
        </header>
    )
}

export default Header