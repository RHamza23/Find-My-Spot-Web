import React, { useContext } from 'react'
import TestimonialCard from '../components/TestimonialCard'
import img1 from '../assets/img/24.jpg'
import img2 from '../assets/img/25.jpg'
import img3 from '../assets/img/26.jpg'
import { LangContext } from '../LangContext';
import * as Text from "../Text.json";

const Testimonials = () => {
    const {language} = useContext(LangContext);
    const showText = () =>{
        if(language){
            return Text.eng.Testimonials;
        }
        else{
            return Text.urd.Testimonials;
        }
    }
    return (
        <div className="px-4 flex flex-col justify-center py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bgbackground-blue">
            <div data-aos="fade-right">
                <h1 className='max-w-lg mb-16 text-3xl font-bold sm:text-5xl md:ml-28 text-primary-txt capitalize'>{showText().title}</h1>
            </div>
            <div className=" flex flex-col justify-center mx-auto gap-8 md:flex-row md:justify-end md:gap-4 md:mr-20">
                <TestimonialCard animation = {"50"} text={showText()['card-1'].name} review={showText()['card-1'].review} image={img1} />
                <TestimonialCard animation = {"70"} text={showText()['card-2'].name} review={showText()['card-2'].review} image={img2} />
                <TestimonialCard animation = {"90"} text={showText()['card-3'].name} review={showText()['card-3'].review} image={img3} />
            </div>
        </div>
    )
}

export default Testimonials