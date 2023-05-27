import React from 'react';
import corporateMan from '../../Assets/All Images/P3OLGJ1 copy 1.png';

const Home = () => {
    return (
        <div>
            <div className='flex lg:ml-72 justify-between items-center'>
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
        </div>
    );
};

export default Home;