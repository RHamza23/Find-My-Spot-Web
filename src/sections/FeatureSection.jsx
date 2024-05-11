import React, { useContext } from 'react'
import FeatureCard from '../components/FeatureCard'
import icon1 from '../assets/img/1.svg'
import icon2 from '../assets/img/2.svg'
import icon3 from '../assets/img/3.svg'
import { LangContext } from '../LangContext'
import * as Text from "../Text.json";


const FeatureSection = () => {
    const {language} = useContext(LangContext);
    const showText = () =>{
        if (language) {
            return Text.eng.FeatureSection
        } else {
            return Text.urdu.FeatureSection   
        }
    }
    return (
        <section className="mt-20 mx-8 md:mt-20 md:m-8 bg-white text-primary-txt">
            <div className="container mx-auto grid justify-center gap-28 md:px-32 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard animation = {"fade-right"} title = {showText().Title[0]} icon = {icon1} description = {showText().description[0]} />
                <FeatureCard animation = {"fade-up"} title = {showText().Title[1]} icon = {icon2} description = {showText().description[1]} />
                <FeatureCard animation = {"fade-left"} title = {showText().Title[2]} icon = {icon3} description = {showText().description[2]} />
            </div>
        </section>
    )
}

export default FeatureSection