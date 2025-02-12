// Import React and PureComponent
import React, { PureComponent } from "react";

// Define the PureComp class component, inheriting from PureComponent
class PureComp extends PureComponent {
  render() {
    // Render the value of the 'count' prop passed from the parent component
    return <p>count: {this.props.count}</p>;
  }
}

// Define the Test class component, inheriting from React.Component
class Test extends React.Component {
  // State object to maintain the current count
  state = { count: 0 };

  render() {
    return (
      <>
        {/* Render the PureComp component and pass 'count' as a prop */}
        <PureComp count={this.state.count} />

        {/* Button to increment the count in the state */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </>
    );
  }
}

// Export the Test component for use in other parts of the app
export default Test;
