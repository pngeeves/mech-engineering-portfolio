import React from 'react'

import "./projects.css"

import{ motion } from "framer-motion"
import { projects } from "./ProjectData"

import { UilShare } from '@iconscout/react-unicons'

export default function IndvProj() {
    return (
        <div className="projects">
        <div className="project-all">                                 
            {projects.map((proj) => {
                return (
                    <div className='indv-project' style={{backgroundImage: `url(${proj.img})`}}>
                        <div className="proj-text" >
                            <motion.a whileHover={{scale:1.05}} className="proj-text-box"  href={proj.link}>
                                <h3 className="proj-h3">{proj.title}</h3>
                                <p className="proj-p">{proj.description}</p>
                                <i><UilShare /></i>
                            </motion.a>
                        </div>
                    </div>
                    )
                })}
    </div>
</div>
    )
}
