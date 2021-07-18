import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function Dashboard() {
    const { firebase, auth, firestore } = useSelector(state => state)
    const [ user ] = useAuthState(auth)
    const usersRef = firestore.collection('users');
    const [ userInfo, setUserInfo ] = useState({})
    const history = useHistory();

    useEffect(() => {
        if(!user) return
        usersRef.doc(user.uid).get()
        .then(res => setUserInfo(res.data()))
    }, [ user ])

    return (
        <>
            {!user ? history.push('/login') : <h1>Dashboard</h1>}
        </>
    )
}

export default Dashboard