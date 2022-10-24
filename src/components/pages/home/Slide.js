import React, { useState } from 'react'

import { UilAngleLeftB } from '@iconscout/react-unicons'
import { UilAngleRightB } from '@iconscout/react-unicons'

import {motion} from "framer-motion"

import './slide.css'

import {images} from "./SliderData"


function Slide() {
    const [curImg, setCurImg] = useState(0)

    function handlePreviousBtn() {
        curImg > 0 ? setCurImg(curImg - 1) : setCurImg(images.length - 1);
    }
    
    function handleNextBtn() {
        curImg < images.length - 1 ? setCurImg(curImg + 1) : setCurImg(0);
    }


    return (
        <div className='carousel'>
            <div className='carousel-inner' 
                style={{
                    backgroundImage: `url(${images[curImg].img})`,
                    }}>

                <div className='left' >
                    <motion.button className='background-button' onClick={handlePreviousBtn} whileHover={{scale:1.1}} whileTap={{scale:0.95}}><UilAngleLeftB /></motion.button>
                </div>

                <div className='center'>
                    <motion.a whileHover={{scale:1.04}}><h2>{images[curImg].title}</h2></motion.a>
                    <h3>{images[curImg].subtitle}</h3>

                    <div className='dots-container'>
                        {images.map((img, imgIndex) => (
                            <motion.div whileHover={{scale:1.15}} className='dots' key={imgIndex} onClick={() => setCurImg(imgIndex)}>
                                {
                                    imgIndex===curImg 
                                    ? 
                                    <p>&#9679;</p> 
                                    : 
                                    <p>&#9675;</p>
                                }
                            </motion.div>
                        ))}
                    </div>


                </div>

                <div className='right' >
                <motion.button className='background-button' onClick={handleNextBtn} whileHover={{scale:1.1}} whileTap={{scale:0.95}}><UilAngleRightB /></motion.button>
                </div>

            </div>
        </div>
    )
}

export default Slide