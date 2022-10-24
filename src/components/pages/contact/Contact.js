import './contact.css'

import EmailImg from './contact img/hand-email.png'
import { motion } from "framer-motion"

export default function Contact(){

    const variants = {
        hidden: { opacity: 0, x: 0, y: -10 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return(
        <motion.div 
            className='contact'
            variants={variants} 
            initial="hidden" 
            animate="enter" 
            exit="exit" 
            transition={{ duration: .8 }}
            >
            <header className='contact-header'>
                <div className='contact-header-overlay'>
                    <h1 className='contact-h1'>Lets Get In Touch!</h1>
                    <p className='comtact-p'>Long Beach, CA &nbsp;|&nbsp; John-Doe@gmail.com &nbsp;|&nbsp; ***-***-****</p>
                </div>
            </header>
        
        <div className='form-picture-section'>

            <div className='email-img-1'>
                <div className='contact-img'>
                    <img src={EmailImg} alt='hand pointing' className='contact-img-img'/>
                </div>
            </div>

            <div className='contact-form-container-2'>
                <form className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='subject'>Subject</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='form-group textarea'>
                        <label htmlFor='message'>Message</label>
                        <textarea type='email' className='form-control'  rows="5"/>
                    </div>
                    <motion.button whileHover={{scale:1.01}} type='submit' className='contact-btn'>Submit</motion.button>
                </form>
            </div>
        
        </div>

        </motion.div>
    )
}