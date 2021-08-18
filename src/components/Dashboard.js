import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import Header from './Dashboard/Header';
import Main from './Dashboard/Main';

function Dashboard() {
    const { firebase, auth, firestore } = useSelector(state => state)
    const [ user ] = useAuthState(auth)
    const usersRef = firestore.collection('users');
    const [ userInfo, setUserInfo ] = useState({})
    const [ isPremium, setIsPremium ] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if(!user) return
        usersRef.doc(user.uid).get()
            .then(res => setUserInfo(res.data()))
            .catch(err => console.err({msg: 'we got an error' ,err}))
        user.getIdTokenResult().then(idTokenResult => {
            setIsPremium(Boolean(idTokenResult.claims.premium))
        });
    }, [ user ])

    return (
        <>
            {!user ? history.push('/login') : 
            <>
                <Header userInfo={userInfo} premium={isPremium}/>
                <Main/>
            </>}
        </>
    )
}

export default Dashboard