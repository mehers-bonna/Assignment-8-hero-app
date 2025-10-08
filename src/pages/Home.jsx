import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';
import useApps from '../Hooks/useApps';

const Home = () => {
    // const apps = useLoaderData()
    const {apps, loading, error} = useApps()
    const featuredApps = apps.slice(0,8)
    return (
        <div className='max-w-[1600px] m-auto'>
            <h1 className='text-4xl font-bold text-center mt-10'>Trending Apps</h1>
            <p className='text-gray-500 text-center text-sm mt-5'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 py-10'>
            {
            featuredApps.map(app => (
            <AppCard key={app.id} app={app}/>
            ))
            }
            </div>
            
            <Link to='/apps' className='block w-max mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white rounded-md mb-10 text-center'>Show All</Link>
               
        </div>
    );
};

export default Home;