import React, { useContext } from 'react'
import img1 from '../assets/img/13.svg'
import img2 from '../assets/img/14.svg'
import { LangContext } from '../LangContext';
import * as Text from "../Text.json";

const findmyspotWallet = () => {
  const { language } = useContext(LangContext);
  const showText = () => {
    if(language){
      return Text.eng.findmyspotWallet
  }
  else{
      return Text.urd.findmyspotWallet
  }
  }
  return (
    <div className=" bgbackground-sky text-primary-txt relative flex flex-col px-4 py-16 mx-auto overflow-hidden lg:block lg:flex-col-reverse lg:py-24 xl:py-25 md:px-4 sm:max-w-xl md:max-w-full">
      <div data-aos="fade-right" className="relative flex justify-start md:p-0 lg:p-0 xl:p-0 max-w-lg md:max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pl-10 lg:max-w-2xl lg:mb-0">
          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 text-primary-txt text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
              {showText().title}
            </h1>
            <p className="text-base mt-10 text-gray-500 md:text-2xl text-justify">
              {showText().description}
            </p>
          </div>
        </div>
      </div>
      <div className="z-0 flex gap-3 justify-center h-full lg:pt-60 pl-14 lg:pl-0 md:pl-0 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-full lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:right-10 lg:items-center -rotate-[10deg]">
        <img
          src={img1} 
          shadow-2xl
          className="object-contain h-72 sm:h-80 lg:h-[600px] xl:h-112 2xl:h-128 rounded-b-3xl"
          alt=""
        />
        <img
          src={img2}
          className="object-contain h-72 sm:h-80 lg:h-[600px] xl:h-112 2xl:h-128 rounded-b-3xl"
          alt=""
        />
      </div>
    </div>

  )
}

export default findmyspotWallet