import React, { useContext, useState } from 'react'
import logo from '../assets/img/InPark-Logo2.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LangContext } from '../LangContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    function toggleMenu() {
        setOpenMenu(prevState => !prevState)
    }

    const {language, toggleFunction} = useContext(LangContext);

    return (
        <header className="lg:pt-8 lg:pb-4 p-4 lg:px-12 shadow-lg transition-all duration-500">
            <div className="container flex justify-between items-center h-16 mx-auto transition-all duration-500">
                <div className=" w-full pr-8 pl-4 flex items-center justify-between md:mx-auto md:max-w-[1450px] h-24 overflow-x-hidden">
                    <div className=" flex items-center">
                        <div className=" w-36">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div>
                        <div className=' flex gap-5 items-center'>
                            <div className="items-center flex-shrink-0 hidden lg:flex font-normal">
                                
                                <Link className=' self-center text-primary-btn px-6 text-[20px]' to="">Home</Link>
                                <Link className=' self-center text-primary-btn px-6 text-[20px]' to="contact">Contact</Link>
                                <Link className=' self-center text-primary-btn px-6 text-[20px]' to="map">Map</Link>
                               
                            </div>
                            <div className=' hidden md:block'>
                                <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer">
                                    <input type="checkbox" id='Toggle4' checked={language} onChange={toggleFunction}  className="hidden peer" />
                                    <span className="px-4 transition-all duration-300 py-2 text-white font-semibold bg-toggle-checked peer-checked:bg-gray-100 peer-checked:text-black peer-checked:font-normal  rounded-s-lg">Urdu</span>
                                    <span className="px-4 transition-all duration-300 py-2 bg-gray-100 peer-checked:text-white peer-checked:font-semibold peer-checked:bg-toggle-checked rounded-e-lg">ENG</span>
                                </label>
                            </div>
                        </div>
                        <h1 onClick={toggleMenu} className=" block md:hidden">{!openMenu && <AiOutlineMenu size={28} />}</h1>
                    </div>
                    <div className={openMenu ? " z-10 fixed flex flex-col md:hidden h-full ease-in duration-500 bg-[#ECEBF0] w-[85%] top-0 right-0 " : " z-10 fixed flex flex-col md:hidden h-full top-0 right-0 w-[85%] bg-[#ECEBF0] ease-in-out duration-700 translate-x-full"}>
                        <div className=" mt-8 px-6 self-end w-full flex items-center justify-between">
                            <h1 className={!openMenu && 'animate-spin'} onClick={toggleMenu} ><AiOutlineClose size={28} /></h1>
                            <div className=''>
                                <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer">
                                    <input type="checkbox" id='Toggle4' checked={language} onChange={toggleFunction} className="hidden peer" />
                                    <span className="px-4 transition-all duration-300 py-2 text-white font-semibold bg-toggle-checked peer-checked:bg-gray-100 peer-checked:text-black peer-checked:font-normal  rounded-s-lg">Urdu</span>
                                    <span className="px-4 transition-all duration-300 py-2 bg-gray-100 peer-checked:text-white peer-checked:font-semibold peer-checked:bg-toggle-checked rounded-e-lg">ENG</span>
                                </label>
                            </div>
                        </div>
                            <div className="items-center flex-shrink-0 lg:flex font-normal pl-6 pt-16">
                                <Link className=' self-center text-primary-btn px-6 text-[20px]' to="">Home</Link>
                                <Link className=' self-center text-primary-btn px-6 text-[20px]' to="contact">Contact</Link>
                                <Link className=' self-center text-primary-btn px-6 text-[20px]' to="map">Map</Link>
                               
                                {/* <button className=' self-center text-secondary-btn px-6 py-6 text-[21px]'>Sign Up</button>
                                <Button text={'Log In'} /> */}
                            </div>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar