import './about.css'
import { motion } from "framer-motion"
import AboutPart1 from './AboutPart1'


export default function About(){
    const variants = {
        hidden: { opacity: 0, x: 0, y: -10 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    return(
        <motion.div 
            variants={variants} 
            initial="hidden" 
            animate="enter" 
            exit="exit" 
            transition={{ duration: .8 }}   
            className="about"
            >
            <AboutPart1 />
        </motion.div>
    )
}