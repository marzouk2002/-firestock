import React from 'react'
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header() {
    return (
        <header className="d-header">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <div className="user-logo">
                    <img src={User} alt="user icon"/>
                </div>
            </div>
        </header>
    )
}

export default Header