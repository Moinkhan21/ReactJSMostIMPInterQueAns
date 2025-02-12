// Importing React to use JSX and create the component
import React from 'react';

// Defining a functional component named 'Functional'
// The component receives 'props' as its argument
export const Functional = (props) => {
  // The component returns JSX that defines its UI
  return (
    <div>
      {/* Displaying a static heading */}
      <h3>This is a functional component</h3>

      {/* Accessing the 'name' property from 'props' to display dynamic content */}
      <h2>My name is = {props.name}</h2>
    </div>
  );
};
