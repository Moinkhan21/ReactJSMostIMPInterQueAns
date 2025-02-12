// Importing React and necessary hooks
import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  // Declaring state variable 'counter' and its setter function 'setcounter'
  // Initializing 'counter' with a default value of 0
  const [counter, setcounter] = useState(0);

  // Using the 'useEffect' hook to perform side effects
  useEffect(() => {
    // Updating the document title with the current value of 'counter'
    document.title = counter;

    // Logging to the console whenever 'useEffect' runs
    console.log("UseEffect is running...");
  }, [counter]); // Dependency array ensures useEffect runs only when 'counter' changes

  // Returning JSX that defines the UI of the component
  return (
    <div>
      {/* Static text for the component heading */}
      <h1>UseEffect</h1>

      {/* Displaying the current value of 'counter' */}
      <h1>{counter}</h1>

      {/* Button to increment the 'counter' state when clicked */}
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default UseEffect;
