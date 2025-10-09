import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../components/AppCard';
import searchIcon from '../assets/searchicon.png';
import logo from '../assets/logo.png';

const Apps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchedApps, setSearchedApps] = useState(apps)

    useEffect(() => {
        setLoading(true);

        const delay = setTimeout(() => {
            const term = search.trim().toLocaleLowerCase();
            if (term) {
                setSearchedApps(
                    apps.filter(app =>
                        app.title.toLocaleLowerCase().includes(term)
                    )
                );
            } else {
                setSearchedApps(apps);
            }
            setLoading(false); 
        }, 500); 

        return () => clearTimeout(delay); 
    }, [search, apps]);
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='py-10'>
                <h1 className='text-4xl text-center font-bold '>Our All Applications</h1>
                <p className='text-center tex-sm text-gray-500 mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between py-5 items-center mb-5 max-w-[1600px] m-auto'>
                <h1 className='text-2xl font-semibold'><span>({searchedApps.length})</span> Apps Found</h1>
                <label className="input">
                    <span><img src={searchIcon} alt="" /></span>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
                </label>
            </div>
             {loading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <h1 className="text-2xl font-bold tracking-widest text-gray-800 flex items-center gap-2">L <span className="animate-pulse"><img src={logo} alt="" className="w-24 animate-spin" /></span> ADING
                    </h1>
                </div>
            ) : (
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[1600px] m-auto pb-10'>
                {searchedApps.length > 0 ? (
                    searchedApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-2xl font-bold">
                        No Apps Found
                    </p>
                )}

            </div>
            )}
        </div>
    );
};

export default Apps;