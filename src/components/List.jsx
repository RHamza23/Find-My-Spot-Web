import React, { useContext } from 'react'
import ListItem from './ListItem'
import bullet1 from '../assets/img/6.svg'
import bullet2 from '../assets/img/7.svg'
import bullet3 from '../assets/img/8.svg'
import bullet4 from '../assets/img/9.svg'
import bullet5 from '../assets/img/10.svg'
import img from '../assets/img/5.svg'
import ReadmoreButton from './ReadmoreButton'
import { LangContext } from '../LangContext'
import * as Text from "../Text.json";


const List = () => {
    const showText = () =>{
        return Text.eng.HowItWorksSection['list-text']
    }
    return (
        <div>
            <div className="pr-12 grid lg:gap-8 lg:grid-cols-2">
                <div className="lg:col-start-2">
                    <div className="mt-1 space-y-8">
                        <ListItem bullet={bullet1} text={showText()[0]} />
                        <ListItem bullet={bullet2} text={showText()[1]} />
                        <ListItem bullet={bullet3} text={showText()[2]} />
                        <ListItem bullet={bullet4} text={showText()[3]} />
                        <ListItem bullet={bullet5} text={showText()[4]} />
                    </div>
                </div>
                <div data-aos="fade-up" className="md:w-[600px] lg:mt-1 lg:col-start-1 lg:row-start-1">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default List