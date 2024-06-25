import React from 'react';

const WhyUsCard = ({ animation, icon, title, overview, showDetails }) => {
    return (
        <div data-aos={animation} className="text-center">
            <div className="flex items-center justify-center mb-4 rounded-full sm:mx-auto">
                <img src={icon} alt={title} className="w-24 h-24 text-deep-purple-accent-400 sm:w-44 sm:h-44"/>
            </div>
            <h2 className="mb-2 text-2xl mt-10 font-bold text-primary-txt">{title}</h2>
            {showDetails && (
                <p className="max-w-md mt-6 text-lg mb-3 sm:mx-auto text-secondary-txt">
                    {overview}
                </p>
            )}
        </div>
    );
};

export default WhyUsCard;
