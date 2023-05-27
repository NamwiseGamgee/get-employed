import React from 'react';
import './Header.css'
import img from '../../Assets/All Images/CareerHub.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='mt-16 lg:mx-72 flex justify-between items-center mb-12'>
                <div>
                    <Link to='/'>
                    <img src={img} alt="" />
                    </Link>
                </div>
                <div className='flex gap-10 text-[#757575] font-medium'>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/applied'>Applied Jobs</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <div>
                    <button className='font-extrabold text-xl text-white py-5 px-7 bg-[#7e90fe] rounded-lg'>Apply Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;