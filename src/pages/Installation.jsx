import React, { useEffect, useState } from 'react';
import download2 from '../assets/download.png';
import star from '../assets/star.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [install, setInstall] = useState([])
    const [sortRatingAvg, setSortRatingAvg] = useState('none')

    useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('Install')) || [];
        console.log("Install array on mount:", savedList);
        setInstall(savedList);
    }, []);
const handleInstall = (id) => {
        const updated = install.filter(app => app.id !== id);
        setInstall(updated);
        localStorage.setItem('Install', JSON.stringify(updated));
        toast.success('App uninstalled successfully!', {
            position: "top-right",
            autoClose: 2000
        });
    };

    const sortedItem = () => {
        if(sortRatingAvg === 'ratingAvg-asc') {
           return [...install].sort((a, b) => a.ratingAvg - b.ratingAvg)
        }
        else if(sortRatingAvg === 'ratingAvg-desc') {
            return [...install].sort((a, b) => b.ratingAvg - a.ratingAvg)
        }
        else{
           return install
        }
    }

    useEffect(() => {
    const handleStorageChange = () => {
      const updatedList = JSON.parse(localStorage.getItem('Install')) || [];
      setInstall(updatedList);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

    return (
        <div>
             <ToastContainer />
         <div className='flex justify-between items-center py-10 max-w-[1600px] m-auto'>
         <h1 className='text-2xl font-semibold'><span>({install.length})</span> Apps Found</h1>
         <label className='form-control w-full max-w-xs'>
            <select
            className='select select-bordered'
         value = {sortRatingAvg}
         onChange={e => setSortRatingAvg(e.target.value)}>
            <option value="none">Sort By Download</option>
            <option value="ratingAvg-asc">Low-&gt;High</option>
            <option value="ratingAvg-desc">High-&gt;Low</option>
         </select>
         </label>
         </div>
         {install.length === 0 ? (
        <p className="text-center text-gray-500 py-20 text-lg">
          😕 No apps installed yet.
        </p>
      ) : ( 
         <div className="flex flex-col space-y-4 max-w-[1600px] m-auto pt-10 pb-20">
            {sortedItem().map(p => (
            <div
                key={p.id}
                    className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                     <img
                        src={p.image}
                        alt={p.title}
                        className="w-12 h-12 rounded-md object-cover bg-gray-100"
                            />

                    <div>
                     <h3 className="font-medium text-gray-900">
                        {p.title}
                     </h3>
                     <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                     <span className="flex items-center gap-1 text-[#00D390] font-medium">
                        <img src={download2} alt="" className="w-4 h-4"/>
                        {(p.downloads / 1000000).toFixed(1)}M </span>

                     <span className="flex items-center gap-1 text-[#FF8811] font-medium">
                         <img src={star} alt="" className="w-4 h-4"/>
                            {p.ratingAvg}
                        </span>

                        <span>{p.size}MB</span>
                         </div>
                         </div>
                        </div>

                    <button onClick={() => handleInstall(p.id)}
                        className="bg-[#00D390] hover:bg-[#05be82] text-white px-4 py-1.5 rounded-md text-sm font-semibold"> Uninstall </button>
                    </div>
            ))}
        </div> 
      )}  
        </div>
    );
};

export default Installation;