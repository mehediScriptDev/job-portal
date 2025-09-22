import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";


const instance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxios = () => {
 
  const signOUT = useAuth();

  console.log("15-signOUT", signOUT)

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        
        if(error.response.status === 401 || error.response.status === 403){
          signOUT
          .then(()=>{
            console.log("next time bring token with you")
          })
          .catch(err=>{
            console.log(err)
          })
        }
        return Promise.reject(error);
      }
    );
  }, []);


  return instance;
};

export default useAxios;
