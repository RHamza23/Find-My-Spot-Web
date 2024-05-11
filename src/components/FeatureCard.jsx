import React from 'react'

const FeatureCard = (props) => {
    return (
        <div data-aos={props.animation} className=" relative flex flex-col items-center p-4 text-center border-2 text-secondary-txt border-gray-200 rounded-3xl">
            <img src={props.icon} className=' absolute w-[100px] h-[100px] -top-[70px] ' alt="" />
            <h1 className="mb-3 mt-7 text-3xl font-semibold">{props.title}</h1>
            <div className="space-y-1 text-center">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default FeatureCard