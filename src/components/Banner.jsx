import React from 'react';
import group2 from '../assets/Group2.png';
import group3 from '../assets/Group3.png';
import hero from '../assets/hero.png';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';

const Banner = () => {
    return (
        <div>
            <div>
                <div className='text-center'>
                <h1 className='text-5xl font-bold my-8'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[11px] md:text-sm text-gray-600'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center items-center gap-3 mt-5'>
                <button className='flex gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold'><img src={group2} alt="" />Google Play</button>
                <button className='flex gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold'><img src={group3} alt="" />App Store</button>
            </div>
            <img className='mx-auto my-6' src={hero} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[424px] h-[150px] md:w-full h-[410px] text-center'>
                <h1 className='text-4xl text-white font-semibold text-center pt-16 py-20'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center items-center gap-8 md:gap-16'>
                <div>
                    <p className='text-sm text-white'>Total Downloads </p>
                    <h1 className='flex text-5xl text-white font-bold my-3'>29.6M <img className='hidden md:inline-block ml-0 md:ml-4 h-10 w-10 filter brightness-0 invert' src={download} alt="" /></h1>
                    <p className='text-sm text-white'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-sm text-white'>Total Reviews</p>
                    <h1 className='flex text-5xl text-white font-bold my-3'>906K<img className='hidden md:inline-block ml-0 md:ml-4 h-10 w-10 filter brightness-0 invert' src={rating} alt="" /></h1>
                    <p className='text-sm text-white'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-sm text-white'>Active Apps</p>
                    <h1 className='flex text-5xl text-white font-bold my-3'>132+ <img className='hidden md:inline-block ml-0 md:ml-4 h-10 w-10 filter brightness-0 invert' src={group2} alt="" /></h1>
                    <p className='text-sm text-white'>31 more will Launch</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;