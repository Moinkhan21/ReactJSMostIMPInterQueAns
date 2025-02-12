// Importing React library and the useState hook for state management
import React, { useState } from 'react';

// Defining a child component that uses React.memo for optimization
// React.memo prevents re-rendering if the props do not change
const ChildComponent = React.memo(({ name }) => {
    return <h1>Hello, {name}!</h1>;
});

// Defining the main component
const React_Memo = () => {
    // Declaring a state variable 'name' with an initial value of 'suman'
    const [name, setname] = useState('suman');

    return (
        <div>
            {/* Main heading of the component */}
            <h1>This is React memo</h1>

            {/* Rendering the ChildComponent and passing the 'name' state as a prop */}
            <ChildComponent name={name} />

            {/* Button to update the 'name' state */}
            <button onClick={() => setname("web dev mastery")}>
                Change Name
            </button>
        </div>
    );
};

// Exporting the component for use in other parts of the app
export default React_Memo;
