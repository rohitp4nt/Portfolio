import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
export default function Footer() {
    return (
        <footer>
           
               
                {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
                <div className="footer">
                    <span className="text-sm text-white sm:text-center">
                        © 2024
                        <a href="https://github.com/rohitp4nt/" className="hover:underline">
                            rohitpant
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="socials flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="https://github.com/rohitp4nt" className="text-gray-500 hover:text-gray-900">
                           <img src="/src/components/images/github.png" alt="" />
                            <span className="sr-only">Github</span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/rohit-pant-897172201/" className="text-gray-500">
                        <img src="/src/components/images/linkedin.png" alt="" />
                            <span className="sr-only">Linkedin</span>
                        </Link>
                        <Link to="https://twitter.com/rohitp4nt" className="text-gray-500">
                        <img src="/src/components/images/twitter.png" alt="" />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="https://www.instagram.com/rohitp4nt/" className="text-gray-500">
                        <img src="/src/components/images/insta.png" alt="" />
                            <span className="sr-only">insta</span>
                        </Link>
                        
                    </div>
                </div>
           
        </footer>
    );
}
