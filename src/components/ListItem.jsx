import React from 'react'

const ListItem = (props) => {
    return (
        <div data-aos="fade-up" className=" md:flex items-center justify-center">
            <div className="flex-shrink-0 flex items-center justify-center">
                <div className=" w-12 h-12 rounded-md">
                    <img src={props.bullet} alt="" className=''/>
                </div>
            </div>
            <div className="px-3 mt-6 md:mt-0 md:px-0 md:ml-4">
                <p className="text-base dark:text-gray-400 text-center">{props.text}</p>
            </div>
        </div>
    )
}

export default ListItem