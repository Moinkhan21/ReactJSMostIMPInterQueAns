// Import React to define the functional component
import React from 'react';

// Import the District component to render it inside StateGov
import District from './District';

// Define the StateGov functional component
const StateGov = ({ money }) => {
  return (
    <div>
      {/* Display a heading indicating this is the StateGov Component */}
      <h1>This is StateGov Component</h1>

      {/* Pass the 'money' prop down to the District component */}
      <District money={money} />
    </div>
  );
};

// Export StateGov to use it in other parts of the application
export default StateGov;
