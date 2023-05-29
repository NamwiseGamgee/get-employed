import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getPreviousCart } from '../../Utilities/fakeDb';
import JobCart from '../JobCart/JobCart';

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const prevCart = getPreviousCart();


    // console.log(typeof prevCart);

    // const [appliedJobs, setAppliedJobs] = useState([]);

    let temp = [];
    for (const job in prevCart) {
        let ultraTemp = allJobs.find(j => job == j.id);
        temp = [...temp, ultraTemp];

    }
    // console.log(appliedJobs);

    return (
        <div>
            <div className='bg-[#f9f9ff] pb-36 mb-32'>
                <h2 className='text-center text-[#1a1919] text-4xl font-bold'>Applied Jobs</h2>
            </div>
            <div className='flex flex-col items-center'>
                {
                    temp.map(job => <JobCart
                        key={job.id}
                        job={job}
                    ></JobCart>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;