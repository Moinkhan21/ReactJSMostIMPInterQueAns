// Importing the React library
// React is required for creating and rendering components
import React from 'react';

// Defining the 'LazyComponent' as a functional component
// Functional components are simple, reusable blocks of UI
const LazyComponent = () => {
  return (
    // The main container for this component
    <div>
      {/* Displaying a heading with the text "This is the lazy loaded Component" */}
      <h2>This is the lazy loaded Component</h2>
    </div>
  );
};

// Exporting the component to make it usable elsewhere
export default LazyComponent;
