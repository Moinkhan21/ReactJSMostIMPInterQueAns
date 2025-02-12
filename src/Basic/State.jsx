// Importing React and the 'useState' hook to manage state in the component
import React, { useState } from 'react';

// Defining a functional component named 'State'
const State = () => {
  // Using the useState hook to declare a state variable 'number' and its setter function 'setnumber'
  // Initializing 'number' with a default value of 20.3
  const [number, setnumber] = useState(20.3);

  // Function to increase the value of 'number' by 1
  const increase = () => {
    // Updating the state using 'setnumber'
    setnumber(number + 1);

    // Logging the updated value to the console
    console.log("number = ", number); // Note: This logs the old value due to how state updates work in React
  };

  // Returning JSX to render the component's UI
  return (
    <div>
      {/* Displaying the current value of 'number' */}
      <h1>{number}</h1>

      {/* Button to trigger the 'increase' function when clicked */}
      <button onClick={increase}>Increase</button>
    </div>
  );
};

// Exporting the component so it can be reused in other parts of the app
export default State;
