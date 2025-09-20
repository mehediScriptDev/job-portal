import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
  const { user, loading } = useAuth();
  const [job, setJobs] = useState([]);

  useEffect(() => {
    if (!loading && user.email) {
      // fetch(`http://localhost:5000/job-application?email=${user.email}`)
      //   .then((res) => res.json())
      //   .then((data) => setJobs(data));
      axios.get(`http://localhost:5000/job-application?email=${user.email}`)
      .then(res=>setJobs(res.data))
      
    }
  }, [user, loading]);

  if (loading) {
    return <span className="loading loading-spinner"></span>;
  }
  return (
    <div className="py-10">
      <h1 className="text-primary text-5xl font-bold text-center">
        My Applications {job.length}
      </h1>
      <div
        className=" py-9 mt-12
      "
      >
        
        {job.map((singleAppication) => (
          <div>
            {/* <img src={singleAppication.company_logo} alt="logo" />
            <h1>{singleAppication.title}</h1>
            <h2>{singleAppication.jobType}</h2>
            <h3>{singleAppication.company}</h3> */}
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <button className="btn">x</button>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={singleAppication.company_logo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {singleAppication.title}
                          </div>
                          <div className="text-sm opacity-50">
                            {singleAppication.jobType}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{singleAppication.company}</td>
                  </tr>
                </tbody>
                {/* foot */}
               
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
