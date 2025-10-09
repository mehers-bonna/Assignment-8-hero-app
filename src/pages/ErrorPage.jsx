import React from 'react';
import errorpage from '../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center h-[70vh] px-4 bg-[#F5F5F5]'>
                <img className='w-[130px] md:w-[420px]' src={errorpage} alt="" />
                <h1 className='text-4xl font-bold mb-3'>Oops, page not found!</h1>
                <p className='text-sm text-gray-500'>The page you are looking for is not available.</p>
                <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-3">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;