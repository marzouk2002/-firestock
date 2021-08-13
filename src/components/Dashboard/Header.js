import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header({ userInfo, premium }) {
    const [ viewUser, setViewUser ] = useState(false)
    const { auth } = useSelector(state => state)
    const { picture, name } = userInfo

    const handleShowAndHide = (e) => {
        const isShow = Boolean(e.target.dataset.show)
        const isCard = Boolean(e.target.dataset.card)
        if(!isShow && !isCard) {
            setViewUser(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleShowAndHide)
    }, [])

    return (
        <header className="d-header">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <div className="user-logo" tabIndex="0" data-show="true" onClick={()=>setViewUser(!viewUser)}>
                    <img src={ picture ? picture : User } alt="user icon" data-show="true"/>
                </div>
                { 
                    viewUser && 
                    <div className="user-info" data-card='true'>
                        <div className="user-pic" data-card='true'>
                            <img src={ picture ? picture : User } alt="user profile" data-card='true'/>
                        </div>
                        <p data-card='true'>{name}</p>
                        <hr data-card='true'/>
                        {
                            premium && <>
                                <p>fff</p>
                                <hr/>
                            </>

                        }
                        <Button color="secondary" variant="outlined" onClick={()=>auth.signOut()} data-card='true'>Sign out</Button>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header