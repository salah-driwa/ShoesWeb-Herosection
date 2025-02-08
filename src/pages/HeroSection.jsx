import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import images for each shoe color
import nikeAirMax270Red from "../assets/imges/Nike Air Max 270/N270-pngegg.png";
import nikeAirMax270Black from "../assets/imges/Nike Air Max 270/N270-pngegg1.png";
import nikeAirMax270White from "../assets/imges/Nike Air Max 270/N270-pngegg2.png";

import nikeAirForce1White from "../assets/imges/Nike Air Force 1/N-pngegg.png";
import nikeAirForce1Blue from "../assets/imges/Nike Air Force 1/N-pngegg1.png";
import nikeAirForce1Gray from "../assets/imges/Nike Air Force 1/N-pngegg2.png";

import nikeReactVisionBlack from "../assets/imges/Nike Air Max/NM-pngegg.png";
import nikeReactVisionOrange from "../assets/imges/Nike Air Max/NM-pngegg1.png";
import nikeReactVisionGreen from "../assets/imges/Nike Air Max/NM-pngegg2.png";
import RiveNavigation from "./RiveNavigation";
import shodow from "../assets/imges/shadow.png"
import CountUp from "./CountUp";
// Example data structure for shoes
const shoes = [
  {
    name: "Nike Air Max 270",
    subname: "Ultimate Comfort & Style",
    price: 150,
    colors: ["Red", "Black", "White"],
    sizes: [7, 8, 9, 10, 11],
    themeColor: "#FF3B30",
    images: [nikeAirMax270Red, nikeAirMax270Black, nikeAirMax270White],
  },

  {
    name: "Nike Air Max",
    subname: "Lightweight and Durable",
    price: 100,
    colors: ["Red", "Black", "Blue"],
    sizes: [8, 9, 10, 11, 12],
    themeColor: "#34C759",
    images: [nikeReactVisionBlack, nikeReactVisionOrange, nikeReactVisionGreen],
  },
  {
    name: "Nike Air Force 1",
    subname: "Classic and Timeless",
    price: 220,
    colors: ["White", "Black", "Yellow"],
    sizes: [6, 7, 8, 9, 10],
    themeColor: "#007AFF",
    images: [nikeAirForce1White, nikeAirForce1Blue, nikeAirForce1Gray],
  },
];

// eslint-disable-next-line react/prop-types
const HeroSection = ({Setloading}) => {
  const [currentShoeIndex, setCurrentShoeIndex] = useState(0); // Store the index of the selected shoe
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [ImageLoaded, setImageLoaded] = useState(false);
  // Handle color change
  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
  };

  // Run the intro animation once on mount, then set introCompleted to true
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroCompleted(true);
    }, 1500); // 3 seconds intro duration
    return () => clearTimeout(timer);
  }, []);

  // Access the current shoe using the index
  const currentShoe = shoes[currentShoeIndex];
  
  useEffect(() => {
    setImageLoaded(false); // Reset when shoe or color changes
  }, [currentShoeIndex, selectedColorIndex]);

  return (
    <section className="relative w-full  flex flex-col items-center text-white px-6 md:px-20">
      {/* Main Content */}
      <div className="flex w-full relative md:flex-row items-center justify-center">
        {/* Left Content */}
        <div className="text-center z-50 left-0 absolute md:text-left space-y-4">
          <motion.h1
          key={currentShoe.name}
            className="text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{
              opacity: introCompleted ? 1 : 0,
              y: introCompleted ? 0 : -50,
            }}
            transition={{ duration: 0.8 }}
          >
            {currentShoe.name}
          </motion.h1>

          <motion.p
          key={currentShoe.subname}
            className="text-gray-300 text-xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{
              opacity: introCompleted ? 1 : 0,
              y: introCompleted ? 0 : -50,
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {currentShoe.subname}
          </motion.p>

          <motion.p
            className="text-3xl font-ranade font-semibold"
            initial={{ y: -50, opacity: 0 }}
            animate={{
              opacity: introCompleted ? 1 : 0,
              y: introCompleted ? 0 : -50,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
               $  <CountUp
  from={0}
  to={currentShoe.price}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
          </motion.p>
     

          {/* Color Buttons */}
          <div className="flex space-x-4 my-4">
            {currentShoe.colors.map((color, index) => (
              <motion.div
                key={index+currentShoe}
                className={`w-10 h-10 p-2 rounded-full ${
                  selectedColorIndex === index
                    ? "border-4 border-white opacity-100"
                    : "opacity-60"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleColorChange(index)}
                initial={{ y: -50, opacity: 0 }}
                animate={{
                  opacity: introCompleted ? 1 : 0,
                  y: introCompleted ? 0 : -50,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeIn", // Ensures both opacity and y change at the same rate
                }}
              ></motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
    
            className="mt-4 px-6 py-2 text-lg font-medium rounded-full"
            style={{ backgroundColor: currentShoe.themeColor }}
            initial={{ y: -30, opacity: 0 }}
            animate={{
              opacity: introCompleted ? 1 : 0,
              y: introCompleted ? 0 : -50,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeIn", // Ensures both opacity and y change at the same rate
            }}
          >
            Buy Now
          </motion.button>
        </div>

        {/* Right Content - Shoe Image */}
        <motion.div 
         initial={{ y: 0  }}
         animate={{ y: [30, -30,30]  }}  // Animates from 50 to -50
         transition={{ repeat: Infinity ,duration:3 , type:"tween"}}
        className="flex-1 w-9/12 flex-row h-fit py-60 flex justify-end relative">
        
        <motion.img
  key={`${currentShoeIndex}-${selectedColorIndex}`} // Ensures remount
  src={currentShoe.images[selectedColorIndex]}
  alt={currentShoe.name}
  className="w-6/12 min-w-96 top-10 h-auto dropshadow absolute object-contain"
  style={{
    filter: `drop-shadow(${
      introCompleted ? "-24px -3px 5px #000000" : "0px 0px 0px rgba(0, 0, 0, 0)"
    }), drop-shadow(${
      introCompleted ? "0px 0px 10px rgba(0, 0, 0, 0.5)" : "0px 0px 0px rgba(0, 0, 0, 0)"
    })`,
  }}

 

initial={
  introCompleted ? { opacity: 0, x:120, rotateZ: -60 } : { scale: 20, x:600, opacity: 0, rotateZ: 0 }
}
animate={
  introCompleted
    ? { opacity: 1,x:0, rotateZ: -60 ,scale:1 }
    : { scale: 1, x: 500, opacity: 0, rotateZ: [-75, -75, -75, -60],  transition:{duration:1}}
}
exit={{ opacity: 0 }}
transition={{ duration: 0.5, ease: "easeInOut" }}

onLoad={() => {
    setImageLoaded(true); 
  Setloading(false); // This will correctly set loading to false

}}
/>

        </motion.div>
        <motion.img 
        initial={{scalex:0 , opacity:0}}
        animate={{scaleX:[1.5,1,1.5] ,opacity:[0.8,0.5,0.8]}}
        transition={{ delay:2, repeat: Infinity ,duration:3 , type:"tween"}}
        src={shodow} alt="ss" className=" absolute opacity-80  w-72 -bottom-10 right-1/3" />
        {/* Navigation Bar */}
        <div className="w-3/12 h-[45rem]">
          <RiveNavigation setCurrentShoeIndex={setCurrentShoeIndex} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
