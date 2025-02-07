/* eslint-disable react/prop-types */
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Rive from "../assets/rive/animation.riv";
import { useState } from 'react';

export default function RiveNavigation({ setCurrentShoeIndex }) {
  const { rive, RiveComponent } = useRive({
    src: Rive,
    stateMachines: "State Machine 1",
    autoplay: true,
    artboard: "Sidebar",
  });

  const inputName = 'Number 1';
  const input = useStateMachineInput(rive, 'State Machine 1', inputName);

  const [, setInputValue] = useState(input?.value);

  const handleClick = () => {
    if (input) {
      console.log(`Input value: ${input.value}`);
      setInputValue(input.value);

      // When input changes, update the current shoe state in parent component
      setCurrentShoeIndex(input.value ); // Example logic
    }
  };

  return (
    <RiveComponent onClick={handleClick} />
  );
}
