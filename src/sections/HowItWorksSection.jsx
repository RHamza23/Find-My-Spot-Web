import React, { useContext } from 'react'
import List from '../components/List'
import { LangContext } from '../LangContext';
import * as Text from "../Text.json";

const HowItWorksSection = () => {
    const {language} = useContext(LangContext);
    const showText = () =>{
        if (language) {
            return Text.eng.HowItWorksSection
        } else {
            return Text.urdu.HowItWorksSection    
        }
    }
    return (
        <section className="bg-white mt-20 text-primary-txt">
            <div className="container max-w-xl p-6 py-0 mx-auto space-y-16 text-gray-400 lg:px-8 lg:max-w-7xl">
                <div data-aos="fade-down">
                    <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary-txt">{showText().Title}</h1>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center">{showText()['sub-title']}</p>
                </div>
                <List />
            </div>
        </section>
    )
}

export default HowItWorksSection