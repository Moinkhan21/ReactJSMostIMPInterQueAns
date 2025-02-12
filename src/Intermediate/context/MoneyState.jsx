// Import React to create a React functional component
import React from "react";

// Import the 'MoneyContext' that was created earlier
import MoneyContext from "./MoneyContext";

// Define the 'MoneyState' component which will act as a Context Provider
const MoneyState = (props) => {
  // Define variables or state to hold the financial data
  const money = 1000; // Example: Money balance
  const adhar = 500;  // Example: Some value associated with 'adhar'
  const dollar = 10;  // Example: Currency exchange rate or dollar value

  return (
    // Use the 'MoneyContext.Provider' to provide values to all child components
    <MoneyContext.Provider
      value={{
        money,  // Share 'money' value
        adhar,  // Share 'adhar' value
        dollar, // Share 'dollar' value
      }}
    >
      {/* Render child components passed as props */}
      {props.children}
    </MoneyContext.Provider>
  );
};

// Export the 'MoneyState' component to be used in other parts of the app
export default MoneyState;
