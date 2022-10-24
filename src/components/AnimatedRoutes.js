import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import OneProjectPage from "./pages/projects/project pages/OneProjectPage";

import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <div className="container">
            
            
            <AnimatePresence>
                <Navbar />

            <Routes location={location} key={location.pathname}>
                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/projects/rose-float" element={<OneProjectPage />} />
                <Route path="/projects/glass-strength" element={<OneProjectPage />} />
                <Route path="/projects/warehouse-package-retrieval" element={<OneProjectPage />} />
                <Route path="/projects/3d-printing" element={<OneProjectPage />} />
                <Route path="/projects/metallic-finishes" element={<OneProjectPage />} />
                <Route path="/projects/glass-projects" element={<OneProjectPage />} />
                <Route path="/projects/resin-casting" element={<OneProjectPage />} />
                <Route path="/projects/other-projects" element={<OneProjectPage />} />
            </Routes>

                <Footer />
            </AnimatePresence >
    </div>
    )
}
