import axios from "axios";
import React, {  useEffect } from "react";
// import AuthContext from "../../Context/AuthContext/AuthContext";
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: "https://job-portal-server-1hf4kqc5c-mehedis-projects-1a127c95.vercel.app/",
  withCredentials: true,
  
});

const useAxios = () => {
  const { signOUT } = useAuth();
  // console.log(user);

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status == 401 || error.status == 403) {
          signOUT()
            .then(() => {
              console.log("log out successfully");
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return instance;
};

export default useAxios;
