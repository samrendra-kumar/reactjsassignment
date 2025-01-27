
export const initialState = {
    activeStates: Array(50).fill(false), // Initially, all seats are unbooked (false)
    disabledStates: Array(50).fill(false), // No seats are disabled
    totalCost: 0, // Initial total cost is 0
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_SEAT': {
        const { index, cost } = action.payload;
  
        // Toggle the seat's active state
        const newActiveStates = [...state.activeStates];
        newActiveStates[index] = !newActiveStates[index];
  
        // Calculate the new total cost
        const totalCost = newActiveStates[index]
          ? state.totalCost + cost // Add cost if booking the seat
          : state.totalCost - cost; // Subtract cost if unbooking the seat
  
        return { ...state, activeStates: newActiveStates, totalCost };
      }
      default:
        return state;
    }
  };
  