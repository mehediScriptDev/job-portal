import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { CgPassword } from "react-icons/cg";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";
// import useAxios from "../../Components/hooks/useAxios";

import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // const axiosHook = useAxios();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        const userData = { email: currentUser?.email };
        axios
          .post("http://localhost:5000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      } else {
        axios.post("http://localhost:5000/logout", {}, {withCredentials:true})
        .then(res=>console.log(res.data))
        // axiosHook.post("logout").then((res) => console.log(res.data));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  const signOUT = () => {
    return signOut(auth);
  };

  const authinfo = {
    user,
    signOUT,
    googleLogin,
    setUser,
    setLoading,
    loading,
    createuser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
