// src/pages/index.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import RiveLoader from "./RiveLoader";


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <RiveLoader duration={3000} onComplete={() => setIsLoading(false)} />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto relative overflow-clip h-screen"
    >
      <div className="nike-bg-text">Nike</div>
      <Navbar />
      <HeroSection />
    </motion.div>
  );
};

export default Index;
