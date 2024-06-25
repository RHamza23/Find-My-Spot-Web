import React, { useState } from 'react';
import WhyUsCard from '../components/WhyUsCard';
import icon1 from '../assets/img/15.svg';
import icon2 from '../assets/img/16.svg';
import icon3 from '../assets/img/17.svg';
import ReadmoreButton from '../components/ReadmoreButtton';
import * as Text from '../Text.json';

const WhyUs = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="text-center">
            <div className="px-6 md:px-24 text-primary-txt">
                <div className="container bg-background-sky rounded-xl px-4 mt-10 py-16 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div data-aos="fade-down" className="max-w-xl mb-20 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                        <h1 className="max-w-lg mb-16 text-3xl font-bold leading-none tracking-tight text-primary-txt sm:text-5xl md:mx-auto">
                            {Text.eng.WhyUs.title}
                        </h1>
                    </div>
                    <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                        <WhyUsCard
                            animation="fade-right"
                            icon={icon1}
                            title={Text.eng.WhyUs['card-1'].title}
                            overview={Text.eng.WhyUs['card-1'].overview}
                            showDetails={showDetails}
                        />
                        <WhyUsCard
                            animation="fade-up"
                            icon={icon2}
                            title={Text.eng.WhyUs['card-2'].title}
                            overview={Text.eng.WhyUs['card-2'].overview}
                            showDetails={showDetails}
                        />
                        <WhyUsCard
                            animation="fade-left"
                            icon={icon3}
                            title={Text.eng.WhyUs['card-3'].title}
                            overview={Text.eng.WhyUs['card-3'].overview}
                            showDetails={showDetails}
                        />
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="mb-10">
                <span onClick={toggleDetails}>
                    <ReadmoreButton text={showDetails ? 'Read Less' : 'Read More'} />
                </span>
            </div>
        </div>
    );
};

export default WhyUs;
