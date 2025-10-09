import React from 'react';
import download2 from '../assets/download.png';
import star from '../assets/star.png';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    console.log(app)
    const {image, ratingAvg, title, description, ratings, id} = app
    return (
            <div className="card bg-base-100 w-96 shadow hover:scale-105 transition ease-in-out ">
            <figure className='pt-5'>
                <img className='rounded-2xl '
                    src={image} />
            </figure>
            <div className="card-body">
                <p>{title} : {description}</p>
                <div className="card-actions justify-between">
                    <Link to={`/app/${id}`} className="flex gap-2 bg-[#F1F5E8] px-4 py-2 rounded-sm text-[#00D390]"><img src={download2} alt="" />{ratingAvg}M</Link>
                    <button className="flex gap-2 bg-[#FFF0E1] px-4 py-2 rounded-sm text-[#FF8811]"><img src={star} alt="" />{ratings[4].name}
                    
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default AppCard;