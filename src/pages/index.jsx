import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import RiveLoader from "./RiveLoader";

const Index = () => {
  // Track if assets have loaded
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  // Track if the minimum duration has elapsed
  const [minDurationElapsed, setMinDurationElapsed] = useState(false);
  // Final loading state
  const [isLoading, setIsLoading] = useState(true);

  // Start the minimum duration timer (3000ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinDurationElapsed(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // When both conditions are satisfied, hide the loader
  useEffect(() => {
    if (assetsLoaded && minDurationElapsed) {
      setIsLoading(false);
    }
  }, [assetsLoaded, minDurationElapsed]);

  return (
    <div className="relative h-screen">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto z-10 relative overflow-clip h-screen"
      >
        <div className="nike-bg-text">Nike</div>
        <Navbar />
        {/* Pass a callback to HeroSection that signals assets have loaded */}
        <HeroSection Setloading={() => setAssetsLoaded(true)} />
      </motion.div>

      {/* Loader Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20">
          <RiveLoader duration={1000} />
        </div>
      )}
    </div>
  );
};

export default Index;
