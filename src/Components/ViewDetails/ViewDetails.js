import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { BsCoin, BsPersonWorkspace, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { setToLocalStorage } from '../../Utilities/fakeDb';
import { Toaster, toast } from 'react-hot-toast';

const ViewDetails = () => {
    const details = useLoaderData();
    const { id, jobDescription, jobTitle, companyName, salary, educationalRequirements, jobResponsibility, experiences, contactInformation, location, remoteOrOnsite, fullOrPartTime } = details;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const handleApplyNow = (id) => {
        setToLocalStorage(id);
        toast.success("You have applied for the job");
        /* toast.custom(<div className=''>You have applied for the job <IoIosCheckmarkCircle></IoIosCheckmarkCircle></div>); */
    }

    return (
        <div>
            <div className='bg-[#f9f9ff] pb-36 mb-32'>
                <h2 className='text-center text-[#1a1919] text-4xl font-bold'>{jobTitle}</h2>

            </div>
            <div className='lg:mx-72 flex gap-7 items-center justify-around mb-32'>
                <div className='w-2/3'>
                    <div className='pb-8'>
                        <button onClick={handleGoBack} className='font-extrabold  text-white py-1 px-1 bg-[#7e90fe] rounded-lg'>Go back</button>
                    </div>
                    <h2 className='mb-6'><span className='text-[#1a1919] font-semibold text-lg'>Job Description: </span> <span className='text-[#757575] font-medium'>{jobDescription}</span></h2>

                    <h2 className='mb-6'><span className='text-[#1a1919] font-semibold text-lg'>Job Responsibility: </span> <span className='text-[#757575] font-medium'>{jobResponsibility}</span></h2>

                    <h2 className='mb-6'><span className='text-[#1a1919] font-semibold text-lg'>Educational Requirements: </span> <span className='block text-[#757575] font-medium'>{educationalRequirements}</span></h2>

                    <h2 className='mb-6'><span className='text-[#1a1919] font-semibold text-lg'>Experiences: </span><span className='text-[#757575] font-medium'>{experiences}</span></h2>
                    <h2 className='mb-6'><span className='text-[#1a1919] font-semibold text-lg'>Job Type: </span><span className='text-[#757575] font-medium'>{fullOrPartTime}, {remoteOrOnsite}</span></h2>
                </div>
                <div className='border bg-[#4ebeef]'>
                    <div className='p-8'>
                        <div className='mb-8'>
                            <h2>Job Details</h2>
                            <hr className='my-6' />
                            <div className='flex items-center gap-2 mb-4'>
                                <BsCoin></BsCoin>
                                <h2>Salary : {salary} /month</h2>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <BsPersonWorkspace></BsPersonWorkspace>
                                <h2>Job Title : {jobTitle} </h2>
                            </div>
                        </div>
                        <div>
                            <h2>Contact Information</h2>
                            <hr className='my-6' />
                            <div className='flex items-center gap-2 mb-4'>
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                                <h2>Phone : {contactInformation.phone} </h2>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <MdEmail></MdEmail>
                                <h2>Email : {contactInformation.email} </h2>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <MdLocationOn></MdLocationOn>
                                <h2>Address : {location} </h2>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button onClick={() => handleApplyNow(id)} className='font-extrabold text-xl text-white py-3 px-5 bg-[#7e90fe] rounded-lg'>Apply Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;