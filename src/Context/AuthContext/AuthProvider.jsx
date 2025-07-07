import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { CgPassword } from 'react-icons/cg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createuser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authinfo={
        user,
        setUser,
        setLoading,
        loading,
        createuser
    }

    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;