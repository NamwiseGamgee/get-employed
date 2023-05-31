import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <div className='bg-[#f9f9ff] px-5 lg:px-0'>
            <div className='pt-4 md:pt-16 lg:mx-72 flex flex-col gap-4 items-center md:flex-row md:justify-between md:items-center pb-12'>
                <div>
                    <Link to='/'>
                    <button className='text-base md:text-4xl font-semibold'>getEmployed</button>
                    </Link>
                </div>
                <nav className='flex flex-col md:flex-row md:gap-10 text-[#757575] font-medium'>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/applied'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </nav>
                <div>
                    <Link to='*' className='block btn btn-1 btn-1e w-fit'>See Error Page</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Header;