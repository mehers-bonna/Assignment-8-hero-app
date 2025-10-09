import React from 'react';
import appError from '../assets/App-Error.png';

const AppError = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center h-[70vh] px-4 '>
                <img src={appError} alt="" />
                <h1 className='text-4xl font-bold mb-3'>OPPS!! APP NOT FOUND</h1>
                <p className='text-sm text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-3">Go Back</button>
            </div>
        </div>
    );
};

export default AppError;