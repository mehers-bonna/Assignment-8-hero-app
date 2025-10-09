import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';
import useApps from '../Hooks/useApps';

const Home = () => {
    const {apps, loading, error} = useApps()
    const featuredApps = apps.slice(0,8)
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-[1600px] m-auto pb-10'>
            <h1 className='text-4xl font-bold text-center pt-10'>Trending Apps</h1>
            <p className='text-gray-500 text-center text-sm mt-5'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 py-10'>
            {
            featuredApps.map(app => (
            <AppCard key={app.id} app={app}/>
            ))
            }
            </div>
            
            <Link to='/apps' className='block w-max mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white rounded-md text-center '>Show All</Link>
               
        </div>
        </div>
    );
};

export default Home;