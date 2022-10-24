import { useState } from "react";
import {motion} from "framer-motion"
import "./navbar.css";

import Pdf from '../images/alex-resume.pdf';


export default function NavBar(){
    const [navExpand, setNavExpand] = useState(false);
    console.log(navExpand)

//when the button is clicked then (depending if useState is true or false) the className for div ul will toggle the two dif displays in css 
//when true then expanded and button is x
    return(
        <nav className="navbar" >

            <motion.a href="/" className="name-logo" whileHover={{scale:1.01}}>
                Alexander GB. | Mechanical Engineer
            </motion.a>

            <motion.a href="/" className="initials-logo" whileHover={{scale:1.01}}>
                Alexander GB. | Mech.
            </motion.a>

            <div className="outer-hamburger">
            <motion.button className="hamburger" onClick={() => {setNavExpand(!navExpand)}} whileTap={{scale:0.8}} >
                {!navExpand ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                }
            </motion.button>
            </div>
        <div className={navExpand ? "navigation" : "navigation expanded"}>
            <ul>
                <li><a href="/"> Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href={Pdf} rel="noopener noreferrer" target="_blank">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
}