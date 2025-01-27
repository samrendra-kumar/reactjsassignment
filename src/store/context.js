
import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
