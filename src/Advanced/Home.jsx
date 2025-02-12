// Importing the React library
// React is required to create and use components
import React from 'react';

// Defining the 'Home' component as a functional component
// Functional components are simple functions that return JSX elements
const Home = () => {
  return (
    // Outer container for the component
    <div>
      {/* Displaying a heading with the text "This is home page" */}
      <h1>This is home page</h1>
    </div>
  );
};

// Exporting the 'Home' component to allow its usage in other parts of the application
export default Home;
