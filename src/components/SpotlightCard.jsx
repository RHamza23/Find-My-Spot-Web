import React from 'react'
import ReadmoreButton from './ReadmoreButton'

const SpotlightCard = (props) => {
  return (
    <div data-aos="flip-left" className=' md:flex bg-white rounded-xl rounded-br-xl text-black'>
        <div className=' p-16 text-center md:text-start '>
            <h1 className=' text-primary-txt text-2xl mb-7 md:w-96'>{props.title}</h1>
            <h1 className=' text-[26px] text-secondary-txt mb-7 md:w-96'>{props.subtitle}</h1>
            <p className=' text-lg mb-7 text-secondary-txt md:w-96'>{props.overview}</p>
            <ReadmoreButton text= {'Read More'} />
        </div>
        <div className=' relative bg-gradient-to-l from-blue-300 to-blue-400 rounded-e-xl overflow-hidden pt-10 md:pt-0 flex items-end justify-center'>
            <img src={props.image} alt="" className=' rounded-e-xl z-20' />
            <div className=' md:ml-32 ml-20 absolute bg-shadow-shade h-64 w-56 md:h-[500px] md:w-[200px] rounded-xl blur-xl'></div>
        </div>
    </div>
  )
}

export default SpotlightCard