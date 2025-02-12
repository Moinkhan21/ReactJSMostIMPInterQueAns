// Importing React and useState hook from the React library
import React, { useState } from 'react';

// Defining a functional component named 'Counter'
const Counter = () => {
    // Declaring a state variable 'counter' and its updater function 'setcounter'
    // useState(0) initializes 'counter' with a value of 0
    const [counter, setcounter] = useState(0);

    // Returning the JSX structure that defines the component's UI
    return (
        <div>
            {/* Displaying a static heading */}
            <h1>Virtual DOM</h1>

            {/* Displaying the current value of the 'counter' state */}
            <h1>{counter}</h1>

            {/* Button that increments the 'counter' state when clicked */}
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
        </div>
    );
}

// Exporting the 'Counter' component to make it available for import in other files
export default Counter;
