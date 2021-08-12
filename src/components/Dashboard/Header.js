import React from 'react'
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header({ userInfo }) {
    const { picture } = userInfo

    return (
        <header className="d-header">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <div className="user-logo" tabIndex="0">
                    <img src={ picture ? picture : User } alt="user icon"/>
                </div>
                <div className="user-info">
                    
                </div>
            </div>
        </header>
    )
}

export default Header