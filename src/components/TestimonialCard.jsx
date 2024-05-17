import React from 'react'

const TestimonialCard = (props) => {
    return (
        <div data-aos="fade-left" data-aos-delay={props.animation} className=' w-[300px] rounded-2xl bg-gradient-to-l from-blue-400 to-blue-500 text-white p-5'>
            <div>
                <div className=' flex justify-end'>
                <img
                    className="object-cover w-28 h-28 rounded-full shadow"
                    src={props.image}
                    alt="Person"
                />
                </div>
            </div>
            <div className="flex flex-col justify-center mt-7">
                <p className="text-4xl">{props.text}</p>
                <p className="text-base mt-6 tracking-wide">
                    {props.review}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard