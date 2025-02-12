// Import React to define the functional component
import React from 'react';

// Import the 'Janta' component to be used inside 'Block'
import Janta from './Janta';

// Define the 'Block' functional component
// Use destructuring to extract 'money' directly from props
const Block = ({ money }) => {
  return (
    <div>
      {/* Heading for the Block component */}
      <h1>This is Block component</h1>

      {/* Pass the 'money' prop to the child component 'Janta' */}
      <Janta money={money} />
    </div>
  );
};

// Export 'Block' so it can be imported and used in other parts of the app
export default Block;
