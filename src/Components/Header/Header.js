import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='pt-16 lg:mx-72 flex justify-between items-center pb-12'>
                <div>
                    <Link to='/'>
                    <button className='text-4xl font-semibold'>getEmployed</button>
                    </Link>
                </div>
                <nav className='flex gap-10 text-[#757575] font-medium'>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/applied'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </nav>
                <div>
                    <Link to='*' className='btn btn-1 btn-1e'>See Error Page</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Header;