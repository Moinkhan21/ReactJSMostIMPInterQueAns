// Importing the React library to use its functionalities for creating components
import React from 'react';

// Defining the 'About' component as a functional component
// Functional components are simple functions that return React elements
const About = () => {
  return (
    // The outermost container for the component, using a <div> element
    <div>
      {/* Displaying a heading with the text "This is about page" */}
      <h1>This is about page</h1>
    </div>
  );
};

// Exporting the 'About' component to make it usable in other parts of the application
export default About;
