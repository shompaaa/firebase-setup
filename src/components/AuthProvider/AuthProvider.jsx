/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    //For User Registration
    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //For User Login
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        registerUser,
        loginUser,
        user,
        setUser
    }

  return <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  </div>;
};

export default AuthProvider;
