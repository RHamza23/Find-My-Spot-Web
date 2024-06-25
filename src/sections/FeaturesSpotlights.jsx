import React, { useContext } from 'react'
import SpotlightCard from '../components/SpotlightCard'
import img1 from '../assets/img/11.svg'
import img2 from '../assets/img/12.svg'
import { LangContext } from '../LangContext'
import * as Text from "../Text.json";

const FeaturesSpotlights = () => {
    const {language} = useContext(LangContext);
    const showText = () =>{
        return Text.eng.FeaturesSpotlights
    }
    return (
        <section className=" bgbackground-lgtblue pt-20">
            <div className="container max-w-xl p-6 py-0 mx-auto space-y-10 text-gray-400 lg:px-8 lg:max-w-7xl">
                <div data-aos="fade-down">
                    <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary-txt">{showText().Title}</h1>
                </div>
                <div className=' flex flex-col gap-14 justify-center items-center p-10'>
                    <SpotlightCard title ={showText()['card-1'].title} subtitle = {showText()['card-1'].subtitle} overview = {showText()['card-1'].overview} image = {img1}/>
                    <SpotlightCard title ={showText()['card-2'].title} subtitle = {showText()['card-2'].subtitle} overview = {showText()['card-2'].overview} image ={img2}/>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSpotlights