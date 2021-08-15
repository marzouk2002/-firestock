import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import Logo from '../../images/logo.svg'
import User from '../../images/user.svg'

function Header({ userInfo, premium }) {
    const [ viewUser, setViewUser ] = useState(false)
    const { auth, firestore, firefunc } = useSelector(state => state)
    const usersRef = firestore.collection('users');
    const { picture, name, email, subscriptions } = userInfo

    const handleShowAndHide = (e) => {
        const isAccount = Boolean(e.target.dataset.account)
        if(!isAccount) setViewUser(false)
    }

    useEffect(() => {
        document.body.addEventListener("click", handleShowAndHide)
    }, [])

    const deleteAccount = async () => {
        try {
            const { uid } = auth.currentUser
            await usersRef.doc(uid).delete()
            await firefunc.httpsCallable('deleteUser')(uid, subscriptions)
            auth.signOut()
        }
        catch(err) {
            console.log(err)
        }

    }

    return (
        <header className="d-header">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="account-panel">
                <div className="user-logo" tabIndex="0" data-account="true" onClick={()=>setViewUser(!viewUser)}>
                    <img src={ picture ? picture : User } alt="user icon" data-account="true"/>
                </div>
                { 
                    viewUser && 
                    <div className="user-info" data-account='true'>
                        <div className="user-pic" data-account='true'>
                            <img src={ picture ? picture : User } alt="user profile" data-account='true'/>
                        </div>
                        <p data-account='true'>{name}</p>
                        <p className="email" data-account='true'>{email}</p>
                        <hr data-account='true'/>
                        <div className="btns" data-account='true'>
                            <div>
                                <Button variant="outlined" onClick={()=>auth.signOut()} data-account='true'>Sign out</Button>
                            </div>
                            <div>
                                <Button color="secondary" variant="outlined" onClick={deleteAccount} data-account='true'>Delete Account</Button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header