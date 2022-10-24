import React from 'react'
import './aboutPart1.css'

import AlexImg from '../../images/1-profile2.png'
import AlexImg2 from '../../images/inside-profile.png'

import { UilEnvelope } from '@iconscout/react-unicons'

import { motion } from "framer-motion"

export default function AboutPart1() {
    return (
        <div className='part1'>
            <div className='outer1'>
                <div className='inner1'>
                    
                    <h1 className='about-part1-h1'>About Me</h1>
                    <p className='about-part1-p'>A recent graduate of Cal Poly School of Engineering, I am constantly expanding my knowledge through both education and hands on experience. 
                        I excel with working with small and large teams in a fast-paced environment. 
                        Through various projects, I have an understanding of every step of the manufacturing and testing process, from 3d modeling to construction. 
                        I desire a position in design, working on multiple projects with an interactive team.</p>
                    
                </div>
                <div className='inner2'>
                <img src={AlexImg2} alt='alex glass' className='about-part1-img' />
                </div>
            </div>

            <div className='outer2'>
                <div className='inner3'>
                    <img src={AlexImg} alt='alex glass' className='about-part1-img'/>
                </div>
                <div className='inner4'>               
                    
                    <h2>"Impossible is just another way of saying improbable"</h2>
                    <p className='about-part1-p'>A personal goal and fascination of mine is bringing fiction into reality, may it be from media or someone's imagination. 
                        To spark wonder in people as they can see and touch something that they haven't even considered to be real.</p>

                    <a href='/contact' className='about-a'><motion.button whileHover={{scale:1.04}}  className='to-contact'>
                        Lets get in touch &nbsp;  <UilEnvelope />
                    </motion.button></a>
                </div>
            </div>
        </div>
    )
}
