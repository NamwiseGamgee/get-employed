import React from 'react';
import './Home.css'
import corporateMan from '../../Assets/All Images/P3OLGJ1 copy 1.png';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    const jobData = useLoaderData();
    // console.log(jobData);

    return (
        <div>
            <div className='px-5 flex flex-col text-center md:flex-row lg:pl-72 md:justify-between md:items-center bg-[#f9f9ff] mb-5 md:mb-32 gap-4 '>
                <div className=''>
                    <div>
                        <h1 className='text-base md:text-4xl lg:text-7xl font-bold mb-6 lg:leading-normal'>One Step <br />Closer To Your <br /><span className='text-[#7e90fe]'>Dream Job</span></h1>
                        <p className='text-[#757575] mb-8'>
                            Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.
                        </p>
                        <a href='#job-category' className='get-started'>Get Started</a>
                    </div>
                </div>
                <div>
                    <img className='md:w-full' src={corporateMan} alt="" />
                </div>
            </div>
            <div className='lg:mx-72 px-5 lg:px-0'>
                <div className='text-center mb-8'>
                    <h2 className='font-bold md:text-5xl text-[#1a1919] mb-4'>Job Category List</h2>
                    <h6 className='text-[#757575] font-medium'>Explore thousands of job opportunities all over the world</h6>
                </div>
                <div id='job-category' className='grid md:grid-cols-4 justify-center gap-6 mb-5 md:mb-32'>
                    {
                        jobData.map(job => <JobCategory
                            key={job._id}
                            job={job}
                        ></JobCategory>)
                    }
                </div>
            </div>
            <div className='sm:px-5 lg:px-0'>
                <div className='text-center mb-8'>
                    <h2 className='font-bold md:text-5xl text-[#1a1919] mb-4'>Featured Jobs</h2>
                    <h6 className='text-[#757575] font-medium'>Explore thousands of job opportunities all over the world</h6>
                </div>
                <div className='mx-5 mb-6 md:mb-32'>
                    <FeaturedJobs></FeaturedJobs>
                </div>
            </div>
        </div>
    );
};

export default Home;