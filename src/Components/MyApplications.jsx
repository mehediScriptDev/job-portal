import React, { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';

const MyApplications = () => {
    const {user} = useAuth();
    const [job,setJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])
    return (
        <div className='py-10'>
            <h1 className='text-primary text-5xl font-bold text-center'>My Applications {job.length}</h1>
        </div>
    );
};

export default MyApplications;