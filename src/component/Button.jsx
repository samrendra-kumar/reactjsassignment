import React, { useState } from 'react';

// Child component for Button
const Button = ({ index, active, onClick, disabled }) => {
  return (
    <button
      className={`w-16 h-16 font-bold rounded-lg transition-colors duration-200 flex items-center justify-center ${
        disabled
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : active
          ? 'bg-green-500 text-white'
          : 'bg-white text-black border border-green-500'
      }`}
      onClick={() => !disabled && onClick(index)} // Prevent click if disabled
      disabled={disabled} // Native disabled attribute
    >
      {index + 1}
    </button>
  );
};

// Parent component
const Clickable = () => {
  const [activeStates, setActiveStates] = useState([true, false, true, false, true, true, true, true, true, true, true, true]);
  const [disabledStates, setDisabledStates] = useState([false,false, false, false, false,false, false, false, false, false, false, false]);

  const handleClick = (index) => {
    const newStates = [...activeStates];
    newStates[index] = !newStates[index]; // Toggle active state
    setActiveStates(newStates);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid grid-cols-12 gap-4">
        {activeStates.map((active, index) => (
          <Button
            key={index}
            index={index}
            active={active}
            onClick={handleClick}
            disabled={disabledStates[index]} // Pass disabled state for each button
          />
        ))}
      </div>
    </div>
  );
};

export default Clickable;

