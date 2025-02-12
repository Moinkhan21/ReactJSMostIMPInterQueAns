// Import React and the useRef hook
import React, { useRef } from "react";

// Define the UseRef functional component
const UseRef = () => {
  // Create a ref object using useRef
  // The ref will be attached to the 'div' to access and manipulate it directly
  const divRef = useRef(null);

  // Define a function to change the color of the 'div' using the ref
  const toggleColor = () => {
    // Access the current element associated with the ref
    divRef.current.style.backgroundColor = "blue"; // Change background color to blue
    divRef.current.style.color = "white"; // Change text color to white
  };

  return (
    <div>
      {/* The 'div' element that will change its styles dynamically */}
      <div
        ref={divRef} // Attach the ref to this element
        style={{
          backgroundColor: "yellow", // Initial background color
          height: "50px", // Height of the 'div'
          width: "50px", // Width of the 'div'
          padding: "50px", // Padding around the content
          color: "black", // Initial text color
        }}
      >
        Change my background color!
      </div>

      {/* A heading for additional content */}
      <h1>Hello</h1>

      {/* A button to trigger the toggleColor function */}
      <button onClick={toggleColor}>change color</button>
    </div>
  );
};

// Export the component for use in other parts of the app
export default UseRef;
