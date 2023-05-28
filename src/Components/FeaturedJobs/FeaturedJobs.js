import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);


    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setDisplayedJobs(data.slice(0, 4));
            });
    }, []);

    const seeAllJobsHandler = () => {
        
        setShowAllJobs(true);
        
        setDisplayedJobs(jobs);
    }

    return (
        <div>
            <div className='grid grid-cols-2 lg:mx-72 gap-6 mb-10'>
                {
                    displayedJobs.map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
                }
            </div>
            <div className={`text-center ${showAllJobs ? 'hidden' : ''}`}>
                <button onClick={seeAllJobsHandler} className='font-semibold text-xl text-white py-5 px-5 bg-[#7e90fe] rounded-lg'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;