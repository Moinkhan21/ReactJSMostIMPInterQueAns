// Importing React and the useState hook
// React is used to create the component, and useState helps manage the state of the component
import React, { useState } from 'react';

const Form = () => {
  // Defining state variables for email, password, and error messages
  const [email, setEmail] = useState(''); // Holds the email entered by the user
  const [password, setPassword] = useState(''); // Holds the password entered by the user
  const [error, setError] = useState(''); // Holds any error messages to display

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser behavior of refreshing the page on form submission

    // Basic validation for email and password length
    if (!email || password.length < 6) {
      // If email is empty or password length is less than 6, set an error message
      setError('Email is required and password must be at least 6 characters');
    } else {
      // If validation passes, show an alert for successful submission and clear error
      alert('Form Submitted!');
      setError(''); // Reset the error message
    }
  };

  return (
    <div>
      {/* Form element with an onSubmit handler */}
      <form onSubmit={handleSubmit}>
        {/* Input for the email field */}
        <input
          type="text" // Specifies that this input is a text field
          value={email} // Binds the input value to the email state
          onChange={(e) => setEmail(e.target.value)} // Updates email state as the user types
          placeholder="Enter your email" // Provides a placeholder for better UX
        />
        <br />
        <br />
        {/* Input for the password field */}
        <input
          type="password" // Specifies that this input is for passwords
          value={password} // Binds the input value to the password state
          onChange={(e) => setPassword(e.target.value)} // Updates password state as the user types
          placeholder="Enter your password" // Provides a placeholder for better UX
        />
        <br />
        <br />
        {/* Displays the error message if there's any */}
        {error && <h1 style={{ color: 'red' }}>{error}</h1>}
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
