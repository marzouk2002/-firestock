import React, { useState, useRef, useEffect } from 'react'
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header({ userInfo }) {
    const [ viewUser, setViewUser ] = useState(false)
    const { picture } = userInfo
    const userInfoCard = useRef()

    useEffect(() => {
        if(viewUser) userInfoCard.current.focus()
    }, [ viewUser ])

    const viewCard = (e) => {
        e.stopPropagation()
        setViewUser(true)
    }

    return (
        <header className="d-header">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <div className="user-logo" tabIndex="0" onClick={viewCard} >
                    <img src={ picture ? picture : User } alt="user icon"/>
                </div>
                { 
                    viewUser && <div className="user-info" tabIndex="0" onBlur={()=>setViewUser(false)} ref={userInfoCard}>

                    </div>
                }
            </div>
        </header>
    )
}

export default Header