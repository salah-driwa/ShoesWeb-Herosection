/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import Rive from "../assets/rive/loading.riv";

const RiveLoader = ({ duration = 3000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const { RiveComponent } = useRive({
    src: Rive,
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete(); // Callback when loading ends
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null; // Hides the loader after the duration

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-[#1d1025] via-[#122337] to-[#0b0209]">
      <RiveComponent style={{ height: "50%" }} />
    </div>
  );
};

export default RiveLoader;
