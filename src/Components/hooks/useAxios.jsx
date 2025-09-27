// import axios from "axios";
// import React, { useEffect } from "react";
// // import AuthContext from "../../Context/AuthContext/AuthContext";
// import useAuth from "./useAuth";

// const instance = axios.create({
//   baseURL: "https://job-portal-server-eight-bay.vercel.app/",
//   withCredentials: true,
// });

// const useAxios = () => {
//   const { signOUT } = useAuth();
//   // console.log(user);

//   useEffect(() => {
//     const interceptor = instance.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (
//           error.response &&
//           (error.response.status === 402 || error.response.status === 403)
//         ) {
//           signOUT()
//             .then(() => console.log("log out successfully"))
//             .catch((err) => console.log(err));
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       instance.interceptors.response.eject(interceptor);
//     };

//     // instance.interceptors.response.use(
//     //   (response) => {
//     //     return response;
//     //   },
//     //   (error) => {
//     //     return Promise.reject(error);
//     //   }
//     // );
//   }, [signOUT]);

//   return instance;
// };

// export default useAxios;


import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://job-portal-server-eight-bay.vercel.app/",
  withCredentials: true,
});



const useAxios = () => {
  const { signOUT } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const interceptor = instance.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error.response?.status === 402 || error.response?.status === 403) {
  //         signOUT().catch(console.log);
  //       }
  //       return Promise.reject(error);
  //     }
  //   );

  //   return () => instance.interceptors.response.eject(interceptor);
  // }, [signOUT]);

  useEffect(() => {
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error.status);
            if (error.status === 405 || error.status === 407) {
                signOUT()
                    .then(() => {
                        // redirect to the login page
                        navigate('/register')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    }, [])


  return instance;
};

export default useAxios;

