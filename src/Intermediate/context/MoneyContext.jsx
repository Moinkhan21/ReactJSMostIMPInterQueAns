// Import 'createContext' from React library to create a new context
import { createContext } from "react";

// Create a context named 'MoneyContext'.
// Contexts allow components to share data without explicitly passing props through multiple levels.
const MoneyContext = createContext();

// Export 'MoneyContext' so it can be used in other parts of your application.
// It will serve as the central state container for components that need access to the 'MoneyContext'.
export default MoneyContext;
