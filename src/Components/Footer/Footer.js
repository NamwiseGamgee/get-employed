import React from 'react';
import './Footer.css'
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
const Footer = () => {
    return (
        <div className='lg:px-72 bg-[#1a1919] pt-32'>
            <div className='flex justify-between mb-12'>
                < div>
                    <h2 className='text-white mb-5 text-3xl font-semibold'>getEmployed</h2>
                    <p className='mb-5 text-[rgba(255,255,255,0.7)]'>
                        There are many variations of passages <br />of Lorem Ipsum , but the majority have <br />suffered alteration in some form.
                    </p>
                    <div className='flex gap-4'>
                        <a className='decoration-0' href="/"><CiFacebook className='w-10 h-10 rounded-[50%] bg-white p-1'></CiFacebook></a>
                        <a className='decoration-0' href="/"><CiInstagram className='w-10 h-10 rounded-[50%] bg-white p-1'></CiInstagram></a>
                        <a className='decoration-0' href="/"><CiTwitter className='w-10 h-10 rounded-[50%] bg-white p-1'></CiTwitter></a>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold text-white'>Company</h3>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>About Us</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Work</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Latest News</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Careers</h2>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold text-white'>Product</h3>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Prototype</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Parts Pricing</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Customers</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Integrations</h2>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold text-white'>Support</h3>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Help Desk</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Sales</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Become a Partner</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>Developers</h2>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold text-white'>Contact</h3>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>524 Brooklyn, NYC</h2>
                    <h2 className='text-[rgba(255,255,255,0.7)]'>+11777-4555-652</h2>
                </div>
            </div>
            <hr className='pb-52' />
        </div>
    );
};

export default Footer;