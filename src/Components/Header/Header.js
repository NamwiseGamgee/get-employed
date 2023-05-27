import React from 'react';
import './Header.css'
import img from '../../Assets/All Images/CareerHub.png';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='pt-16 lg:mx-72 flex justify-between items-center pb-12'>
                <div>
                    <Link to='/'>
                    <img src={img} alt="" />
                    </Link>
                </div>
                <nav className='flex gap-10 text-[#757575] font-medium'>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/applied'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </nav>
                <div>
                    <button className='font-extrabold text-xl text-white py-5 px-7 bg-[#7e90fe] rounded-lg'>Apply Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;