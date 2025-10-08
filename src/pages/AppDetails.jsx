import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/download.png';
import star from '../assets/star.png';
import review from '../assets/review.png';
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LabelList,} from 'recharts';

const AppDetails = () => {
    const {id} = useParams()
    const {apps} = useApps()
    const app = apps.find(p => String(p.id) === id)

    if (!app) return <p>Loading...</p>;
    
    const {image, title, companyName, downloads, ratingAvg, reviews, ratings, description,} = app;

    const ratingData = [...ratings].reverse().map(r => ({
        name: `${r.name.trim()} star`,
        count: r.count,
    }));
    return (
        <div className='max-w-[1600px] m-auto'>
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
            <button className='bg-[#00D390] px-4 py-2 rounded-md text-white'>Install Now (291 MB)</button>
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