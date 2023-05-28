import React from 'react';
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";

const SingleJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnSite, location, salary, fullOrPartTime } = job;
    return (
        <div>
            <div className='mx-auto bg-[rgba(152,115,255,0.1)] p-10'>
                <div>
                    <img className='h-20 w-20 mb-8' src={companyLogo} alt="logo" />
                    <h2 className='text-2xl font-extrabold text-[#474747] mb-2'>{jobTitle}</h2>
                    <h4 className='text-xl font-semibold text-[#757575] mb-4'>{companyName}</h4>

                </div>
                <div className='mb-4 flex gap-4'>
                    <button className='border border-[#7e90fe] px-4 py-2'>{remoteOrOnSite === 'Remote' ? "Remote" : "Onsite"}</button>
                    <button className='border border-[#7e90fe] px-4 py-2'>{fullOrPartTime === 'Part-time' ? "Part-time" : "Full-time"}</button>
                </div>
                <div className='flex gap-6 items-center mb-6'>
                    <div className='font-semibold text-[#757575]'>
                        <CiLocationOn className='inline'></CiLocationOn> Location : {location}
                    </div>
                    <div className='font-semibold text-[#757575]'>
                         <CiMoneyBill className='inline'></CiMoneyBill> Salary : {salary}
                    </div>

                </div>
                <button className='font-semibold text-white py-2 px-3 bg-[#7e90fe] rounded-lg'>View Details</button>
            </div>
        </div>
    );
};

export default SingleJob;