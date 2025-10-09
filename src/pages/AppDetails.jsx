import React, {useState} from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/download.png';
import star from '../assets/star.png';
import review from '../assets/review.png';
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LabelList,} from 'recharts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AppError from './AppError';

const AppDetails = () => {
    const {id} = useParams()
    const {apps} = useApps()
    const [isInstalled, setIsInstalled] = useState(false);
    // const app = apps.find(p => String(p.id) === id)
    const app = apps.find((a) => String(a.id) === id);

    if (!apps || apps.length === 0) {
    return <p className="text-center mt-10">Loading...</p>;
    }
    if (!app) {
    return <AppError />; 
    }
    
    const {image, title, companyName, downloads, ratingAvg, reviews, ratings, description, size} = app;

    const ratingData = [...ratings].reverse().map(r => ({
        name: `${r.name.trim()} star`,
        count: r.count,
    }));

    const handleInstallNow = () => {
  const existingList = JSON.parse(localStorage.getItem('Install')) || [];

  const isDuplicate = existingList.some(a => a.id === app.id);

  if (isDuplicate) {
    toast.warning(`${title} is already installed!`, {
      position: "top-center",
      autoClose: 2000,
    });
    return;
  }

  const updatedList = [...existingList, app];
  localStorage.setItem('Install', JSON.stringify(updatedList));

  setIsInstalled(true);
  toast.success(`Yahoo 🔥 !! ${title} installed successfully`, {
    position: "top-center",
    autoClose: 2000,
  });
};

    return (
        <div className='max-w-[1600px] m-auto'>
            <ToastContainer  />
            <div className='flex flex-col md:flex-row gap-10 items-start my-10'>
                <img className="rounded-lg shadow-md" src={image} alt="" />
            
            <div className='ml-10'>
                <h1 className='text-3xl font-bold'>{title} : {description}</h1>
                <p><span className='text-gray-500'>Developed by</span> <span className='text-[#632EE3]'>{companyName}</span></p>
                <div className='flex gap-10 border-t border-gray-300 mt-5 mb-5'>
                <div className='mt-5'>
                    <img className='w-8 h-8' src={download} alt="" />
                    <p className='text-sm text-gray-500 my-2'>Downloads</p>
                    <h1 className='text-3xl font-bold'>{(downloads / 1000000).toFixed(1)}M</h1>
                </div>
                <div className='mt-5'>
                    <img className='w-8 h-8' src={star} alt="" />
                    <p className='text-sm text-gray-500 my-2'>Average Ratings</p>
                    <h1 className='text-3xl font-bold'>{ratingAvg}</h1>
                </div>
                <div className='mt-5'>
                    <img className='w-8 h-8' src={review} alt="" />
                    <p className='text-sm text-gray-500 my-2'>Total Reviews</p>
                    <h1 className='text-3xl font-bold'>{reviews.toLocaleString()}</h1>
                </div>
            </div>
            <button onClick={handleInstallNow} className={`px-4 py-2 rounded-md text-white ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
            disabled={isInstalled}>
             {isInstalled ? 'Installed' : `Install Now ${size}MB`}</button>
            </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
                <div className="w-full h-64 bg-white border-t border-gray-300">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={ratingData}
                            margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                        >
                            <XAxis
                                type="number"
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tickLine={false}
                                axisLine={false}
                                width={60}
                            />
                            <Tooltip
                                cursor={{ fill: '#f3f4f6' }}
                                formatter={(value) =>
                                    `${value.toLocaleString()} reviews`
                                }
                            />
                            <Bar
                                dataKey="count"
                                fill="#f97316" // orange
                                radius={[0, 6, 6, 0]}
                                barSize={25}
                            >
                                <LabelList
                                    dataKey="count"
                                    position="right"
                                    formatter={(val) => val.toLocaleString()}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-5 border-t border-gray-300">
                <h2 className="text-2xl font-semibold mt-5  ">Description</h2>
                <p className="text-gray-700 leading-relaxed my-5">{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;