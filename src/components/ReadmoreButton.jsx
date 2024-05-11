import React from 'react'

const ReadmoreButton = (props) => {
  return (
    <button className=" primary-button self-center text-white text-lg text-10  md:whitespace-nowrap px-20 py-5 rounded-l-full rounded-r-full bg-gradient-to-l from-yellow-400 to-yellow-500">{props.text}</button>
  )
}

export default ReadmoreButton
