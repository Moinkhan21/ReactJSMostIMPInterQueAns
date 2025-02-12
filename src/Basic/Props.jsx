// Importing React to use JSX and create the component
import React from 'react';

// Defining a functional component named 'Props'
// Destructuring 'name', 'age', and 'pincode' from the props object
const Props = ({ name, age, pincode }) => {
  // Returning the JSX structure that defines the UI of this component
  return (
    <div>
      {/* Dynamically rendering the 'name' property */}
      <h1>My name = {name}</h1>

      {/* Dynamically rendering the 'age' property */}
      <h2>My age = {age}</h2>

      {/* Dynamically rendering the 'pincode' property */}
      <h3>My pincode = {pincode}</h3>
    </div>
  );
};

// Exporting the component so it can be imported and used elsewhere
export default Props;
