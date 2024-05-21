import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/img/findmyspot-Logo2.png';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LangContext } from '../LangContext';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase'; // Adjust the path based on your project structure
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { language, toggleFunction } = useContext(LangContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    setUsername(userDoc.data().username);
                }
            } else {
                setCurrentUser(null);
                setUsername('');
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        signOut(auth);
        setCurrentUser(null);
        setUsername('');
    };

    const toggleMenu = () => {
        setOpenMenu(prevState => !prevState);
    };

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
                                {currentUser ? (
                                    <>
                                        <span className=' self-center text-primary-btn px-6 text-[20px]'>Hello, {username}</span>
                                        <button onClick={handleSignOut} className=' self-center text-primary-btn px-6 text-[20px]'>Sign Out</button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/signup" className=' self-center text-primary-btn px-6 text-[20px]'>Sign Up</Link>
                                        <Link to="/signin" className=' self-center text-primary-btn px-6 text-[20px]'>Log In</Link>
                                    </>
                                )}
                            </div>
                            <div className=' hidden md:block'>
                                <label htmlFor="Toggle4" className="inline-flex items-center p-1 cursor-pointer">
                                    <input type="checkbox" id='Toggle4' checked={language} onChange={toggleFunction} className="hidden peer" />
                                    <span className="px-4 transition-all duration-300 py-2 text-white font-semibold bg-blue-500 peer-checked:bg-gray-100 peer-checked:text-black peer-checked:font-normal rounded-s-lg">Urdu</span>
                                    <span className="px-4 transition-all duration-300 py-2 bg-gray-100 peer-checked:text-white peer-checked:font-semibold peer-checked:bg-blue-500 rounded-e-lg">ENG</span>
                                </label>
                            </div>
                        </div>
                        <h1 onClick={toggleMenu} className=" block md:hidden">{!openMenu && <AiOutlineMenu size={28} />}</h1>
                    </div>

                    <div className={openMenu ? " z-10 fixed flex flex-col md:hidden h-full ease-in duration-500 bg-[#ECEBF0] w-[85%] top-0 right-0 " : " z-10 fixed flex flex-col md:hidden h-full top-0 right-0 w-[85%] bg-[#ECEBF0] ease-in-out duration-700 translate-x-full"}>
                        <div className=" mt-8 px-6 self-end w-full flex items-center justify-between">
                            <h1 className={!openMenu && 'animate-spin'} onClick={toggleMenu} ><AiOutlineClose size={28} /></h1>
                            <div className=''>
                                <label htmlFor="Toggle4" className="inline-flex items-center p-1 cursor-pointer">
                                    <input type="checkbox" id='Toggle4' checked={language} onChange={toggleFunction} className="hidden peer" />
                                    <span className="px-4 transition-all duration-300 py-2 text-white font-semibold bg-blue-500 peer-checked:bg-gray-100 peer-checked:text-black peer-checked:font-normal rounded-s-lg">Urdu</span>
                                    <span className="px-4 transition-all duration-300 py-2 bg-gray-100 peer-checked:text-white peer-checked:font-semibold peer-checked:bg-blue-500 rounded-e-lg">ENG</span>
                                </label>
                            </div>
                        </div>
                        <div className="items-center flex-shrink-0 lg:flex font-normal pl-6 pt-16">
                            <Link to="/" className=' self-center text-primary-btn px-6 text-[20px]'>Home</Link>
                            <Link to="/contact" className=' self-center text-primary-btn px-6 text-[20px]'>Contact</Link>
                            <Link to="/map" className=' self-center text-primary-btn px-6 text-[20px]'>Map</Link>
                            {currentUser ? (
                                <>
                                    <span className=' self-center text-primary-btn px-6 text-[20px]'>Hello, {username}</span>
                                    <button onClick={handleSignOut} className=' self-center text-primary-btn px-6 text-[20px]'>Sign Out</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/signup" className=' self-center text-primary-btn px-6 text-[20px]'>Sign Up</Link>
                                    <Link to="/signin" className=' self-center text-primary-btn px-6 text-[20px]'>Log In</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
