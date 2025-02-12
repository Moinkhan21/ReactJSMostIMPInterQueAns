// Import React to define the functional component
import React from 'react';

// Import the 'Block' component to use it inside 'District'
import Block from './Block';

// Define the 'District' functional component
// Destructure 'money' directly from props
const District = ({ money }) => {
  return (
    <div>
      {/* Heading to indicate this is the District component */}
      <h1>This is District component</h1>

      {/* Pass the 'money' prop to the Block component */}
      <Block money={money} />
    </div>
  );
};

// Export the 'District' component for use in other parts of the app
export default District;
