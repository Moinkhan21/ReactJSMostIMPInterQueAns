// Import necessary hooks from React
import React, { useRef, useState } from 'react';

// Define the functional component
export const Control_UnControl = () => {
  // State hook for the controlled input
  const [value, setValue] = useState('');

  // Reference hook for the uncontrolled input
  const inputRef = useRef(null);

  // Function to handle button click for the uncontrolled input
  const handleClick = () => alert(inputRef.current.value);

  return (
    <div>
      {/* Controlled Input Section */}
      <h1>Control</h1>
      {/* 
        Controlled input: The value of this input is tied to the state variable 'value'.
        The 'onChange' event updates the state whenever the input value changes.
      */}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {/* Display the current value of the controlled input */}
      <h2>{value}</h2>

      {/* Uncontrolled Input Section */}
      <h1>UnControl</h1>
      {/* 
        Uncontrolled input: The value of this input is not managed by React's state.
        Instead, we access its value using a reference (useRef).
      */}
      <input ref={inputRef} />
      {/* Button to display the value of the uncontrolled input via an alert */}
      <button onClick={handleClick}>show value</button>
    </div>
  );
};
