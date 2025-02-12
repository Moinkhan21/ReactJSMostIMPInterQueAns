// Import React, the useState hook, and the useCallback hook
import React, { useCallback, useState } from "react";

// Define the UseCallback functional component
const UseCallback = () => {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Define a memoized increment function using the useCallback hook
  // The function updates 'count' by incrementing it by 1
  // The empty dependency array ensures that 'increment' is memoized and will not be recreated on each render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1); // Using the previous state to update the count
  }, []);

  return (
    <div>
      {/* Display the current count */}
      <h1>count = {count}</h1>

      {/* Button to trigger the 'increment' function */}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Export the UseCallback component for use in other parts of the app
export default UseCallback;
