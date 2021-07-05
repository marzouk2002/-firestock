import { combineReducers } from 'redux'

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyBf_wlG0_bywz3BRC-uPtBQmGq0eOPabNM",
  authDomain: "firestock-4beca.firebaseapp.com",
  projectId: "firestock-4beca",
  storageBucket: "firestock-4beca.appspot.com",
  messagingSenderId: "68143485586",
  appId: "1:68143485586:web:77e7ca78f90d7575c38c4b",
  measurementId: "G-CFQZW28MPY"
})

const fireReducer = (state = firebase, action) => {
  return state
}

const authReducer = (state = firebase.auth(), action) => {
  return state
}

const storeReducer = (state = firebase.firestore(), action) => {
  return state
}

const allReducers = combineReducers({
    firebase: fireReducer,
    auth: authReducer,
    firestore: storeReducer
})

export default allReducers