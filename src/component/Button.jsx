import React, { useContext } from 'react';
import { BookingContext } from '../store/context';

const Button = ({ index, cost }) => {
  const { state, dispatch } = useContext(BookingContext);
  const { activeStates, disabledStates } = state;

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_SEAT', payload: { index, cost } });
  };

  return (
    <button
      className={`w-12 h-12 font-bold rounded-lg flex items-center justify-center transition-colors duration-200 ${
        disabledStates[index]
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : activeStates[index]
          ? 'bg-green-500 text-white'
          : 'bg-white text-black border border-green-500'
      }`}
      onClick={() => !disabledStates[index] && handleClick()}
      disabled={disabledStates[index]}
    >
      {index % 10 + 1} {/* Seat number within the row */}
    </button>
  );
};

export default Button;
