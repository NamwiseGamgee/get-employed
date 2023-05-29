import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
const JobCart = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, salary, location, remoteOrOnsite, fullOrPartTime } = job;
    return (
        <div className='border lg:w-[1000px] mb-6 lg:mx-72'>
            <div className='p-8 flex justify-between items-center'>
                <div className='flex gap-8'>
                    <img className='flex my-auto w-32 h-16' src={companyLogo} alt="logo" />
                    <div>
                        <h2 className='font-semibold text-[#474747] text-2xl mb-2'>{jobTitle}</h2>
                        <h3 className='text-2xl font-medium text-[#757575] mb-4'>{companyName}</h3>
                        <div className='mb-4 flex gap-4 mb-6'>
                            <button className='border border-[#7e90fe] px-4 py-2'>{remoteOrOnsite === 'Remote' ? "Remote" : "Onsite"}</button>
                            <button className='border border-[#7e90fe] px-4 py-2'>{fullOrPartTime === 'Part-time' ? "Part-time" : "Full-time"}</button>
                        </div>
                        <div className='flex items-center gap-2 mb-4'>
                            <MdLocationOn className='font-medium text-xl text-[#757575]'></MdLocationOn>
                            <h2 className='font-medium text-xl text-[#757575]'>Address : {location} </h2>
                        </div>
                        <div className='flex items-center gap-2 mb-4'>
                            <BsCoin className='font-medium text-xl text-[#757575]'></BsCoin>
                            <h2 className='font-medium text-xl text-[#757575]'>Salary : {salary}</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='font-extrabold text-xl text-white py-3 px-5 bg-[#7e90fe]'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobCart;