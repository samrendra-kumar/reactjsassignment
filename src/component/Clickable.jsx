

import React, { useContext } from 'react';
import { BookingContext } from '../store/context';
import Button from './Button';

const Clickable = () => {
  const { state } = useContext(BookingContext);
  const { totalCost } = state;

  const rows = ['A', 'B', 'C', 'D', 'E']; // Example row labels
  const seatsPerRow = 10; // Number of seats per row
  const seatCost = 100; // Fixed cost per seat

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-8 underline">Book Tickets</h1>
      <div className="flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-4">
            <span className="font-bold text-lg">{row}</span>
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
                <Button
                  key={seatIndex}
                  index={rowIndex * seatsPerRow + seatIndex}
                  cost={seatCost}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-red-500 text-white font-bold py-2 px-4 rounded-lg">
        PAY ₹{totalCost}
      </button>
    </div>
  );
};

export default Clickable;
