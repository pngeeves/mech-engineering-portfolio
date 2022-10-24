import React, { useState } from 'react'
import { lighthouse } from './OneProjectImgData'
import { AnimatePresence, motion } from 'framer-motion'
import './ImageLight.css'

import ModalComp from './modal components/ModalComp';

export default function ImageLighthouse() {
    

    /*set image state to send to modal component to initialize pop up*/
    const [clickedImg, setClickedImg] = useState(null);
    const [imgIndex, setImgIndex] = useState(null);

    function handleClick(img, index){
        setClickedImg(img.link);
        setImgIndex(index);   
    }
    
    function handlePreviousBtn() {
        const length = lighthouse.length;
        imgIndex > 0 ? setImgIndex(imgIndex - 1) :  setImgIndex(length - 1);
    }
    
    function handleNextBtn() {
        const length = lighthouse.length;
        imgIndex < length - 1 ? setImgIndex(imgIndex + 1) : setImgIndex(0);
    }

    /*toggle modal animation*/
    const close = () => setClickedImg(null);

    return (
        <div className='carosalimg-container'>

            {
            lighthouse.map((img, index) => (
                <motion.div whileHover={{scale:1.01}} className='carosal-indv' key={index} > 
                    <img src={img.link} alt={img.text} onClick={() => handleClick(img, index)}/>
                </motion.div>
            ))}

        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExiteComplete={() => null}
            > 
            {clickedImg && 
                <ModalComp 
                    imgIndex={imgIndex}  
                    handleNextBtn={handleNextBtn}
                    handlePreviousBtn={handlePreviousBtn}
                    handleClose={close}
                    />}
        </AnimatePresence>
        </div>
    )
}
