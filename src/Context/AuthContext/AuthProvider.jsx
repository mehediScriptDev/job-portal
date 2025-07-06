import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { CgPassword } from 'react-icons/cg';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const authinfo={
        user,
        setUser,
        setLoading,
        loading,
        createuser
    }

    const createuser = (email,password)=>{
        return createUserWithEmailAndPassword;
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;