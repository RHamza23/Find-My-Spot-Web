import React, { useState} from 'react';
import logo from '../assets/img/findmyspot-Logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu] = useState(false);

    return (
        <header className="lg:pt-8 lg:pb-4 p-4 lg:px-12 shadow-lg transition-all duration-500 bg-gradient-to-r from-blue-300 to-blue-100">
            <div className="container flex justify-between items-center h-25 mx-auto transition-all duration-500">
                <div className=" w-full pr-8 pl-4 flex items-center justify-between md:mx-auto md:max-w-[1450px] h-21 overflow-x-hidden">
                    <div className=" flex items-center">
                        <div className=" w-36">
                            <img src={logo} alt="Find My Spot Logo" />
                        </div>
                    </div>

                    <div>
                        <div className=' flex gap-5 items-center'>
                            <div className="items-center flex-shrink-0 hidden lg:flex font-normal">
                                <Link to="/" className=' self-center text-primary-btn px-6 text-[20px]'>Home</Link>
                                <Link to="/contact" className=' self-center text-primary-btn px-6 text-[20px]'>Contact</Link>
                                <Link to="/map" className=' self-center text-primary-btn px-6 text-[20px]'>Map</Link>
                                
                            </div>
                        </div>
                    
                    </div>

                    <div className={openMenu ? " z-10 fixed flex flex-col md:hidden h-full ease-in duration-500 bg-[#ECEBF0] w-[85%] top-0 right-0 " : " z-10 fixed flex flex-col md:hidden h-full top-0 right-0 w-[85%] bg-[#ECEBF0] ease-in-out duration-700 translate-x-full"}>
                        <div className="items-center flex-shrink-0 lg:flex font-normal pl-6 pt-16">
                            <Link to="/" className=' self-center text-primary-btn px-6 text-[20px]'>Home</Link>
                            <Link to="/contact" className=' self-center text-primary-btn px-6 text-[20px]'>Contact</Link>
                            <Link to="/map" className=' self-center text-primary-btn px-6 text-[20px]'>Map</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
