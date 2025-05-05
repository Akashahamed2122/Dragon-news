import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
     
    const [loading, setLoading]= useState(true)
    console.log(user,loading)


    // create user

    const createUser = (email, password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }


    // signIN user
    const signIn = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email,password)

    }

    // update user

    const updateUser = (updateData)=>{

        return updateProfile(auth.currentUser , updateData)

    }



    // Logout user

    const LogOut = ()=>{
        return signOut(auth)
           
        
    }



//  on Auth state change

    useEffect(()=>{
    const unsubscribe =     onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)

        })

        return ()=>{
            unsubscribe()
        }
    },[])




    const authData = {
        user,
        setUser,
        createUser,
        LogOut,
        signIn,
        loading,
        setLoading,
        updateUser
    }



    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;