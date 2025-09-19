import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";

const MyApplications = () => {
  const { user, loading} = useAuth();
  const [job, setJobs] = useState([]);

  useEffect(() => {
    if(!loading && user.email){
      fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
    }
  }, [user,loading]);

  if(loading){
    return <span className="loading loading-spinner"></span>
    
  }
  return (
    <div className="py-10">
      <h1 className="text-primary text-5xl font-bold text-center">
        My Applications {job.length}
      </h1>
      <div className="grid grid-cols-5 border-amber-100 border-2 gap-3 gap-y-2 justify-items-center py-9 mt-12
      ">
        {job.map(singleAppication => (
         <div>
          <img src={singleAppication.company_logo} alt="logo" />
           <h1>{singleAppication.title}</h1>
          <h2>{singleAppication.jobType}</h2>
          <h3>{singleAppication.company}</h3>
         </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
