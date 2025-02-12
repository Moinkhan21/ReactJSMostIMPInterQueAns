// Import React and useContext hook to consume context data
import React, { useContext } from 'react';

// Import the MoneyContext to access its values
import MoneyContext from '../../Intermediate/context/MoneyContext';

// Define the Janta functional component
const Janta = () => {
  // Access the context data using the useContext hook
  const data = useContext(MoneyContext);

  // Log the context data to the console for debugging
  console.log(useContext(MoneyContext));

  return (
    <div>
      {/* Display the component heading */}
      <h1>This is Janta Component</h1>

      {/* Render values from the context */}
      <h2>Money: {data.money}</h2>
      <h2>Adhar: {data.adhar}</h2>
      <h1>Dollar: {data.dollar}</h1>
    </div>
  );
};

// Export the Janta component to use it in other parts of the app
export default Janta;
