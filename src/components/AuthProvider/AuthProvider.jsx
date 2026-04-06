/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../../firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    //For User Registration
    const registerUser = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }

    //For User Login
    const loginUser = (email,password)=>{
        signInWithEmailAndPassword(auth,email,password).then(result =>console.log(result.user))
    }

    const authInfo={
        registerUser,
        loginUser
    }

  return <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  </div>;
};

export default AuthProvider;
