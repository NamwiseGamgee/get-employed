import React from 'react';


const JobCategory = ({ job }) => {
    const { jobName, jobLogo, jobsAvailable } = job;

    return (
        <div>
            <div className='p-10 bg-[rgba(152,115,255,0.05)] rounded-lg'>
                <div className='p-4 bg-[rgba(152,115,255,0.1)] rounded-lg w-fit mb-8'>
                    <img src={jobLogo} alt="" />
                </div>
                <h1 className='font-bold text-xl mb-2'>{jobName}</h1>
                <h2 className='text-[#a3a3a3]'>{jobsAvailable}+ Jobs available</h2>
            </div>
        </div>
    );
};

export default JobCategory;