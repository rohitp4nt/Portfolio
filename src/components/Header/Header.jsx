import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {
    return (
        <header className=" header shadow sticky z-50 top-0">
            <nav className="bg-custom-1D1F21 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="logo font-serif">
                        Rohit Pant
                    </Link>
                   
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="font-serif flex flex-col mt-4 font-medium text-lg lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700":"text-white"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    to=""
                                
                                >
                                    Home
                                </NavLink>
                                
                                
                            </li>
                            <li>
                                <NavLink
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700":"text-white"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    to="/about"
                                
                                >
                                    About Me 
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700":"text-white"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    to="/project"
                                
                                >
                                    Projects
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700":"text-white"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    to="/contact"
                                
                                >
                                    Contact
                                </NavLink>
                                
                            </li>
                           
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}

