import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header({ userInfo, premium }) {
    const [ viewUser, setViewUser ] = useState(false)
    const { auth } = useSelector(state => state)
    const { picture, name } = userInfo

    return (
        <header className="d-header">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <div className="user-logo" tabIndex="0" onClick={()=>setViewUser(!viewUser)} >
                    <img src={ picture ? picture : User } alt="user icon"/>
                </div>
                { 
                    viewUser && 
                    <div className="user-info">
                        <div className="user-pic">
                            <img src={ picture ? picture : User } alt="user profile"/>
                        </div>
                        <p>{name}</p>
                        <hr/>
                        {
                            !premium && <>
                                <p>fff</p>
                                <hr/>
                            </>

                        }
                        <Button color="secondary" variant="outlined" onClick={()=>auth.signOut()}>Sign out</Button>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header