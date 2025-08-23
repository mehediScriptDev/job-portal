import React, { useEffect } from 'react';

const HotJobs = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default HotJobs;