import React from 'react'

const Stats = (props) => {
    return (
        <div data-aos={props.animation} className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-6xl font-bold lg:text-6xl">{props.heading}</p>
            <p className="text-xl sm:text-[22px] font-[300] mt-5">{props.subheading}</p>
        </div>
    )
}

export default Stats