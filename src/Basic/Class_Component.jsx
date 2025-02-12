// Importing React library to use its features for building components
import React from "react";

// Defining a class-based React component named 'Class_Component'
class Class_Component extends React.Component {
    // Every class-based component must have a render() method, which returns the JSX to be displayed
    render() {
        return (
            <div>
                {/* Displaying a static heading */}
                <h2>This is a class-based component</h2>

                {/* Displaying dynamic content passed from parent component via props */}
                <h1>My name is {this.props.name}</h1>

                {/* Another example of using props to display age */}
                <h3>My age = {this.props.age}</h3>
            </div>
        );
    }
}

// Exporting the component so it can be imported and used in other parts of the application
export default Class_Component;
