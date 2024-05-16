import React, { useContext } from 'react'
import heroImage from '../assets/img/4.svg'
import Button from '../components/Button'
import { LangContext } from '../LangContext';
import * as Text from "../Text.json";

const HeroSection = () => {
    const {language} = useContext(LangContext);
    const showText = () =>{
        if (language) {
            return Text.eng.HeroSection
        } else {
            return Text.urdu.HeroSection    
        }
        
    }
    return (
        <section className="bg-white mt-5">
            <div className="container flex flex-col justify-center p-10 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div data-aos="fade-right" className="flex flex-col justify-center pt-1 pl-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl text-primary-txt">
                        {showText().Title}
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-secondary-txt">{showText()['Sub-Title']}
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Button text={<span>{showText()['Call-to-Action']}</span>} />
                    </div>
                </div>
                <div data-aos="fade-left" className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={heroImage} alt="" className=" z-20 object-contain h-72 sm:h-80 lg:h-[500px] xl:h-112 2xl:h-128" />
                    <div className=' md:ml-56 ml-20 absolute bg-blue-500 rounded-full h-56 w-56 md:h-96 md:w-96 blur-xl'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection