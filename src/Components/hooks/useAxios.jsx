import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxios = () => {
  const  signOUT  = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status == 401 || error.status == 402) {
          signOUT()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.log(err.status);
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return instance;
};

export default useAxios;
