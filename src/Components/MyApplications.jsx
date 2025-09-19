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
      <div>
        {job.map(singleAppication => (
          <h1>{singleAppication.linkedin}</h1>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
