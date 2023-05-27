import React from 'react';
import corporateMan from '../../Assets/All Images/P3OLGJ1 copy 1.png';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const jobData = useLoaderData();
    // console.log(jobData);

    return (
        <div className=''>
            <div className='flex lg:pl-72 justify-between items-center bg-[#f9f9ff] mb-32'>
                <div>
                    <h1 className='text-7xl font-bold mb-6 leading-normal'>One Step <br />Closer To Your <br /><span className='text-[#7e90fe]'>Dream Job</span></h1>
                    <p className='text-[#757575] mb-8'>
                        Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.
                    </p>
                    <button className='font-extrabold text-xl text-white py-5 px-7 bg-[#7e90fe] rounded-lg'>Get Started</button>
                </div>
                <div>
                    <img src={corporateMan} alt="" />
                </div>
            </div>
            <div className='lg:mx-72'>
                <div className='text-center mb-8'>
                    <h2 className='font-bold text-5xl text-[#1a1919] mb-4'>Job Category List</h2>
                    <h6 className='text-[#757575] font-medium'>Explore thousands of job opportunities all over the world</h6>
                </div>
                <div className='grid grid-cols-4 gap-6 mb-32'>
                    {
                        jobData.map(job => <JobCategory
                            key={job._id}
                            job={job}
                        ></JobCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;