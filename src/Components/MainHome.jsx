import React from 'react';
import Home from './Home';
import HotJobs from '../Context/HotJobs';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <div>
                <HotJobs></HotJobs>
            </div>
        </div>
    );
};

export default MainHome;