import React from 'react'
import Lottie from "lottie-react";
import "./Hero.css" 
import { motion } from "motion/react"
// @ts-ignore
import eliotAvatar from "../../../src/assets/eliot-avatar.jpg"
import codingBoy from "../../animation/Coding boy.json"

export default function Hero() {
  
  return (
    <section className='hero'>
     <div className='left-sec grow'>
        <div className="parent-avatar">
          <motion.img
          initial={{transform:"scale(0)"}}
          animate={{transform:"scale(1.1)"}}
          transition={{damping:6 , type: "spring" , stiffness:100}}
           className='avatar' src={eliotAvatar} alt="" />
          <span className="icon-verified"></span> 
        </div>
        {/*  */}
        <h1 className='title'>Front-End Developer | Pixel-perfect thinker | User-first builder.</h1>
        <p className="sub-title">
         I’m Abdelrahman Emam, a front-end developer and designer based in EGYPT. I craft modern, responsive web experiences with a focus on performance and user delight. Currently exploring the intersection of creativity and code to build impactful digital products.


        </p>
        <div className="icons">
          <a href='https://github.com/abdelrahmann12'  target="_blank" className="icon icon-twitter"></a>
          <a href='https://www.instagram.com/_urman1/'  target="_blank"  className="icon icon-instagram"></a>
          <a href='https://github.com/abdelrahmann12'  target="_blank" className="icon icon-github"></a>
          <a href='https://www.linkedin.com/in/abdelrahman-emam-3b0b09254/'  target="_blank" className="icon icon-linkedin"></a>
        </div>
     </div>
     <div className="right-sec animation">
      <Lottie
       animationData={codingBoy}
       style={{width:500}}
       >

      </Lottie>
     </div>
    </section>
  )
}
