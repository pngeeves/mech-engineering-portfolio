import React from "react";
import "./home.css"

import Slide from "./Slide";

import {motion} from "framer-motion"


function Home() {

    const variants = {
        hidden: { opacity: 0},
        enter: { opacity: 1 },
        exit: { opacity: 0},
    }

    return (
        <motion.div 
            variants={variants} 
            initial="hidden" 
            animate="enter" 
            exit="exit" 
            transition={{ duration:.4 }}   
            className="home"
            >
            <Slide />
        </motion.div>
    )
}

export default Home