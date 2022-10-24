import React from 'react'
import { lighthouse } from '../OneProjectImgData'
import { motion } from 'framer-motion'
import { Backdrop } from './Backdrop'

import { UilAngleLeftB } from '@iconscout/react-unicons'
import { UilAngleRightB } from '@iconscout/react-unicons'

import './ModalComp.css'

export default function ModalComp({imgIndex, handleNextBtn, handlePreviousBtn, handleClose, handleOpen, modalOpen}) {
    
    const dropIn = {
            hidden:{
                y: '-100vh',
                opacity: 0,
            },
            visible:{
                y: '0',
                opacity: 1,
                trandition:{
                    duration: 0.1,
                    typ: 'spring',
                    damping: 25,
                    stiffness:500,
                }
            },
            exit:{
                y: '100vh',
                opacity: 0,
            },
        };
    
    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                className='modal-picture' 
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
                >

                <button onClick={handlePreviousBtn} className='modul-button'><UilAngleLeftB /></button>
                <div className='indv-text-pic'>
                    <img src={lighthouse[imgIndex].link} alt='test' className='lighthous-img-indv'/>
                    <p>{lighthouse[imgIndex].text}</p>
                </div>
                <button onClick={handleNextBtn} className='modul-button'><UilAngleRightB /></button>

            </motion.div>
        </Backdrop>
    )
}
