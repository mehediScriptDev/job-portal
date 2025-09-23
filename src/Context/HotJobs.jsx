import React, { useEffect, useState } from 'react';
import JobCards from './JobCards';

const HotJobs = () => {

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch('https://job-portal-server-1hf4kqc5c-mehedis-projects-1a127c95.vercel.app/jobs')
        // https://job-portal-server-1hf4kqc5c-mehedis-projects-1a127c95.vercel.app/
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-3 gap-3 mb-5'>
            {
                jobs.map(job=> <JobCards job={job}></JobCards>)
            }
        </div>
    );
};

export default HotJobs;