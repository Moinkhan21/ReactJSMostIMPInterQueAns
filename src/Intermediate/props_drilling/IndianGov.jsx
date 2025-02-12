// Import React to define the functional component
import React from 'react';

// Import the 'StateGov' component to be used inside 'IndianGov'
import StateGov from './StateGov';

// Define the 'IndianGov' functional component
const IndianGov = () => {
  // Declare two local variables: money and adhar
  const money = 1000;
  const adhar = 500;

  return (
    <div>
      {/* Heading to indicate this is the IndianGov component */}
      <h1>This is IndianGov Component</h1>

      {/* Pass 'money' and 'adhar' as props to the StateGov component */}
      <StateGov money={money} adhar={adhar} />
    </div>
  );
};

// Export 'IndianGov' so it can be imported and used elsewhere
export default IndianGov;
