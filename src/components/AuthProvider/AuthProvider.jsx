/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const googleProvider = new GoogleAuthProvider();

  //For User Registration
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //For User Login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //For google Login

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Logout
  const userLogout = () => {
    return signOut(auth)
  };

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
},[])

  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    userLogout,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
