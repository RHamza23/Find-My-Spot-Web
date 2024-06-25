import React, { useState } from 'react';
import ReadmoreButton from './ReadmoreButton';

const SpotlightCard = ({ title, subtitle, overview, image, animation }) => {
    const [showOverview, setShowOverview] = useState(false);

    const handleReadMoreClick = () => {
        setShowOverview(!showOverview);
    };

    return (
        <div data-aos={animation} className='md:flex bg-white rounded-xl rounded-br-xl text-black'>
            <div className='p-16 text-center md:text-start'>
                <h1 className='text-primary-txt text-2xl mb-7 md:w-96'>{title}</h1>
                <h2 className='text-[26px] text-secondary-txt mb-7 md:w-96'>{subtitle}</h2>
                {showOverview && (
                    <p className='text-lg mb-7 text-secondary-txt md:w-96 text-justify'>
                        {overview}
                    </p>
                )}
                <span onClick={handleReadMoreClick}>
                    <ReadmoreButton text={showOverview ? 'Read Less' : 'Read More'} />
                </span>
            </div>
            <div className='relative bg-gradient-to-l from-blue-300 to-blue-400 rounded-e-xl overflow-hidden pt-10 md:pt-0 flex items-end justify-center'>
                <img src={image} alt="" className='rounded-e-xl z-20' />
                <div className='md:ml-32 ml-20 absolute bg-shadow-shade h-64 w-56 md:h-[500px] md:w-[200px] rounded-xl blur-xl'></div>
            </div>
        </div>
    );
};

export default SpotlightCard;