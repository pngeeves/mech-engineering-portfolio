import IndvProj from "./IndvProj"
import { motion } from "framer-motion"
import React from "react"




export default function Projects(){
    const variants = {
        hidden: { opacity: 0, x: 0, y: -10 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -50 },
    }
    return(
        <motion.div 
            variants={variants} 
            initial="hidden" 
            animate="enter" 
            exit="exit" 
            transition={{ duration: .8 }}   
            >
        <IndvProj />
        </motion.div>
    )
}