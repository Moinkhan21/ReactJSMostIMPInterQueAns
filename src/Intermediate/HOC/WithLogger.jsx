// Import React to create a Higher-Order Component
import React from 'react';

// Define the Higher-Order Component 'WithLogger'
// 'WrappedComponent' is the component that will be enhanced or wrapped
const WithLogger = (WrappedComponent) => {
  // Return a new functional component
  return (props) => {
    // Render the 'WrappedComponent' and pass all props to it using the spread operator
    return <WrappedComponent {...props} />;
  };
};

// Export 'WithLogger' so it can be reused in other parts of the application
export default WithLogger;
