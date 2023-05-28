import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const detailsx = useLoaderData();
    // console.log('detailsss',detailsx);
    return (
        <div>
            <div className='bg-[#f9f9ff]'>
                <h2>Job Details</h2>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ViewDetails;