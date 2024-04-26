import { animate } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const textVariants2 = {
    initial:{
        x:200,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const sliderVariants = {
    initial:{
        x:"-10%",
        
    },
    animate:{
        x:"50%",
        transition:{
            ease:"linear",
            repeat:Infinity,
            repeatType:"mirror",
            duration:15,
        },
    },
};


export default function Home() {
    return (
        
<>
            <div className='hero'>
                <div className="wrapper">
                <motion.div className='slidingText leading-none' variants ={sliderVariants} initial="initial" animate= "animate" >
                    HOME 
                </motion.div>
                <motion.div className='textContainer' variants ={textVariants} initial="initial" animate= "animate">
                    <h2>HI I AM ROHIT PANT</h2>
                    <h1> Software developer</h1>
                    <div className='buttons'>
                    <Link to="about" >
                    <button className='button1'>
                       About me
                       </button>
                    </Link>
                      
                   
                    <Link to="project">
                        <button className='button2'>
                        My Projects
                        </button>
                        
                    </Link>
                    </div>
                </motion.div>
                </div>
               
                <motion.div className='imageContainer'  variants ={textVariants2} initial="initial" animate= "animate">
                 <img src="https://avatars.githubusercontent.com/u/118741257?s=400&u=5cb3bdf0815cffed1e466ac1ce30f36b0e4c988f&v=4" alt="image1" />

                </motion.div>

            </div>
</>

    );
}
