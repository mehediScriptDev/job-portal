import axios from "axios";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxios = () => {
  const { signOUT, user } = useContext(AuthContext);
  console.log(user);

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
