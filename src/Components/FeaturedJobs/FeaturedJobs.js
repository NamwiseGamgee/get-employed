import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('featuredJobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[]);
    // console.log(jobs);
    return (
        <div className='grid grid-cols-2 lg:mx-72 gap-6'>
            {
                jobs.map(job => <SingleJob
                key={job.id}
                job={job}
                ></SingleJob>)
            }
        </div>
    );
};

export default FeaturedJobs;