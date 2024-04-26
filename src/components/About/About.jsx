import React from 'react';
import { useEffect, useRef } from 'react';

import './About.css';
import { motion, useAnimation } from 'framer-motion';

// const sliderVariants = {
//   initial:{
//       x:"-10%",
      
//   },
//   animate:{
//       x:"50%",
//       transition:{
//           ease:"linear",
//           repeat:Infinity,
//           repeatType:"mirror",
//           duration:15,
//       },
//   },
// };

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

function About() {
  const lastElementRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = lastElementRef.current;
    const onScroll = () => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        controls.start("animate");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);



  return (
    <div className="main" >

              {/* <motion.div className='slidingText2' variants ={sliderVariants} initial="initial" animate= "animate" >
                    About me
                </motion.div> */}

      <motion.div className="aboutme" variants ={textVariants} initial="initial" animate= "animate">
        <h1>About me</h1>
        <p className='aboutpara'variants ={textVariants} initial="initial" animate= "animate">
          Hi there! I'm Rohit Pant, a B.Tech student at Amrapali Haldwani. I'm diving into MEAN stack development, driven by a passion for innovation and growth in software engineering. Always eager to embrace new challenges and technologies. Let's connect and learn together!
        </p>
      </motion.div>

      <div >
        
        <motion.h1 ref={lastElementRef} initial="initial" animate={controls} variants={textVariants}>Education</motion.h1>

        <motion.div className="education" ref={lastElementRef} initial="initial" animate={controls} variants={textVariants}>
        <div className='educationpara'>
          <p>Bachelor of Technology(Btech)</p>
          <p>Amrapali Institute Haldwani 2021-2025</p>
        </div>
        <div className='educationpara'>
          <p>12th PCM</p>
          <p>Cynthia Sr Sec School Haldwani 2020-2021</p>
        </div>
        </motion.div>
        
        
        </div>
        
        <motion.div className="skills " ref={lastElementRef} initial="initial" animate={controls} variants={textVariants}>
          <h1>Skills</h1>

          <div className="skillsimg1 mt-8 flex flex-row items-center justify-center gap-12">

          <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" alt="" />
            <p>JAVA</p>
            </div>
            <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
            <p>JAVASCRIPT</p>
            </div>
            <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
            <p>REACT</p>
            </div>
            <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" alt="" />
            <p>TWILWIND</p>
            </div>
            <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
            <p>GIT</p>
            </div>
            <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
            <p>HTML</p>
            </div>
            <div className='skillsimg flex flex-col items-center justify-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
            <p>CSS</p>
            </div>
          </div>
          
      </motion.div>
      
    
    </div>
  );
}

export default About;
