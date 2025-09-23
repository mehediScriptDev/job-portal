import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

      const { user, loading } = useContext(AuthContext);


  if (loading) {
    return <p className="text-center py-10">Loading...</p>; 
  }
    if(user){
        return children;
    }
    return  <Navigate to={'/register'}/>
};

export default PrivateRoute;