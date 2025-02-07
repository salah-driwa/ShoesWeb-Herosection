// src/pages/index.jsx
//import React from 'react';
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className=" mx-auto  relative h-screen"  
  > 
   <div className="nike-bg-text">Nike</div>
  <Navbar/>
    <HeroSection/>
  </motion.div>
  );
};

export default Index;
