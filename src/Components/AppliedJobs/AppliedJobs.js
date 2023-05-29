import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getPreviousCart } from '../../Utilities/fakeDb';
import JobCart from '../JobCart/JobCart';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const prevCart = getPreviousCart();


    // console.log(typeof prevCart);

    const [isRemote, setIsRemote] = useState(true);
    const [isFulltime, setIsFulltime] = useState(true);


    const [filteredJobs, setFilteredJobs] = useState([]);

    let temp = [];
    for (const job in prevCart) {
        const ultraTemp = allJobs.find(j => job == j.id);
        if (ultraTemp) {
            temp = [...temp, ultraTemp];
        }
    }


    useEffect(() => {
        setFilteredJobs(temp);
    }, []);

    // console.log(filteredJobs);
    const remoteBtnHandler = () => {
        let onlyRemote = [];
        if (isRemote) {
            onlyRemote = temp.filter(job => job.remoteOrOnsite === 'Remote');
        }
        else {
            onlyRemote = temp.filter(job => job.remoteOrOnsite === 'Onsite');
        }
        setFilteredJobs(onlyRemote);
        setIsRemote(!isRemote);
    }
    const fullTimeBtnHandler = () => {
        let onlyFulltime = [];
        if (isFulltime) {
            onlyFulltime = temp.filter(job => job.fullOrPartTime === 'Full-time');
        }
        else {
            onlyFulltime = temp.filter(job => job.fullOrPartTime === 'Part-time');
        }
        setFilteredJobs(onlyFulltime);
        setIsFulltime(!isFulltime);
    }
    return (
        <div>
            <div className='bg-[#f9f9ff] pb-36 mb-32'>
                <h2 className='text-center text-[#1a1919] text-4xl font-bold'>Applied Jobs</h2>
            </div>
            <div className='flex justify-center gap-3 mb-9'>

                <div className="dropdown pb-14">
                    <button className="dropbtn">Filter</button>
                    <div className="dropdown-content">
                        {
                            isRemote ? <button onClick={remoteBtnHandler}>Remote</button> : <button onClick={remoteBtnHandler}>Onsite</button>
                        }
                        {
                            isFulltime ? <button onClick={fullTimeBtnHandler}>Full-time</button> : <button onClick={fullTimeBtnHandler}>Part-time</button>
                        }

                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                {
                    filteredJobs.map(job => <JobCart
                        key={job.id}
                        job={job}
                    ></JobCart>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;