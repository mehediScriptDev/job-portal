import axios from "axios";
import React, {  useEffect } from "react";
// import AuthContext from "../../Context/AuthContext/AuthContext";
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: "https://job-portal-server-eight-bay.vercel.app/",
  withCredentials: true,
  
});

const useAxios = () => {
  const { signOUT } = useAuth();
  // console.log(user);

useEffect(() => {
  const interceptor = instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && (error.response.status === 402 || error.response.status === 403)) {
        signOUT()
          .then(() => console.log("log out successfully"))
          .catch(err => console.log(err));
      }
      return Promise.reject(error);
    }
  );

  return () => {
    instance.interceptors.response.eject(interceptor);
  };
}, [signOUT]);


  return instance;
};

export default useAxios;
