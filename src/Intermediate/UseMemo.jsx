// Import React, the useState hook, and the useMemo hook
import React, { useMemo, useState } from "react";

// Define the UseMemo functional component
const UseMemo = () => {
  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Memoize the calculated value 'doubleCount' using useMemo
  // This ensures that 'doubleCount' is only recalculated when 'count' changes
  const doubleCount = useMemo(() => {
    console.log("Running UseMemo"); // Logs to the console whenever the computation runs
    return count * 2; // Compute double of 'count'
  }, [count]); // Dependency array: 'doubleCount' is recalculated only if 'count' changes

  return (
    <div>
      {/* Display the current count */}
      <p>Count : {count}</p>

      {/* Display the double of the count */}
      <p>Double : {doubleCount}</p>

      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

// Export the UseMemo component for use in other parts of the app
export default UseMemo;
