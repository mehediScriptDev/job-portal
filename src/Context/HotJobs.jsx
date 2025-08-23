import React, { useEffect, useState } from 'react';
import JobCards from './JobCards';

const HotJobs = () => {

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
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