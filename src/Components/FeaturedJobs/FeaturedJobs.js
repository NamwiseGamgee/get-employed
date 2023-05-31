import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './FeaturedJobs.css';
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
            <div className='grid grid-col-1 md:grid-cols-2 lg:mx-72 gap-6 mb-10'>
                {
                    displayedJobs.map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
                }
            </div>
            <div className={`text-center ${showAllJobs ? 'hidden' : ''}`}>
                <button onClick={seeAllJobsHandler} className='see-all-jobs'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;