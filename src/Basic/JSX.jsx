// Importing React to use JSX syntax and define the component
import React from 'react';

// Defining a functional component named 'JSX'
const JSX = () => {
  // Declaring a constant variable to store the first name
  const first_name = 'suman';

  // Returning JSX to render the component's UI
  return (
    <div>
      {/* Displaying the first name dynamically using JSX syntax */}
      <h1>My name is {first_name}</h1>

      {/* Displaying the result of a mathematical expression */}
      <h2>{5 + 6}</h2>
    </div>
  );
};

// Exporting the component so it can be reused in other parts of the app
export default JSX;
