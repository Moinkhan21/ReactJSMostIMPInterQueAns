// Import React to create a functional component
import React from 'react';

// Define the functional component 'Hello' with 'props' as a parameter
const Hello = (props) => {
  return (
    <div>
      {/* Display a heading with the name passed through props */}
      <h1>Hello {props.name}</h1>

      {/* Display a sub-heading with the income value passed through props */}
      <h2>Income {props.income}</h2>
    </div>
  );
}

// Export the 'Hello' component so it can be imported and used in other parts of the app
export default Hello;
