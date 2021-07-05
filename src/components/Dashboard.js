import React from 'react'
import { Redirect } from 'react-dom'
import { useSelector } from 'react-redux'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function Dashboard() {
    const { firebase, auth, firestore } = useSelector(state => state)
    const [user] = useAuthState(auth)
    console.log(auth)
    return (
        <>
            {user && <Redirect to="/login"/>}
        </>
    )
}

export default Dashboard