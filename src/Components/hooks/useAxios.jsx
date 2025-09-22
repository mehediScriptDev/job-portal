import axios from "axios";
import React from "react";

const useAxios = () => {
  const instance = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials:true
  });
  return instance;
};

export default useAxios;
