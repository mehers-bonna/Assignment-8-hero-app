import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../components/AppCard';
import searchicon from '../assets/searchicon.png';

const Apps = () => {
    const {apps} = useApps()
    const [search, setSearch] = useState('')


    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? 
    apps.filter(app => app.title
    .toLocaleLowerCase().includes(term)) : apps
    return (
        <div>
            <div className='my-10'>
            <h1 className='text-4xl text-center font-bold '>Our All Applications</h1>
            <p className='text-center tex-sm text-gray-500 mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between py-5 items-center mb-5 max-w-[1600px] m-auto'>
                <h1 className='text-2xl font-semibold'><span>({searchedApps.length})</span> Apps Found</h1>
                <label className="input">
                 <span><img src={searchicon} alt="" /></span>   
                <input
                value={search}
                 onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
                </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[1600px] m-auto mb-10'>
                    {searchedApps.map(app => (
                        <AppCard key={app.id} app={app}></AppCard>
                    ))}

                </div>
        </div>
    );
};

export default Apps;