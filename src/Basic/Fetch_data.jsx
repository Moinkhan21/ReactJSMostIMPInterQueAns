// Importing React, useState, and useEffect from the React library
import React, { useEffect, useState } from "react";

// Defining a functional component named 'Fetch_data'
const Fetch_data = () => {
  // Declaring a state variable 'api_data' to store the fetched data
  // useState([]) initializes it as an empty array
  const [api_data, setapi_data] = useState([]);

  // useEffect runs side effects, such as fetching data, when the component renders
  useEffect(() => {
    // Defining an asynchronous function to fetch data from an API
    const fetchDataFromAPI = async () => {
      try {
        // Fetching data from the JSONPlaceholder API
        const api = await fetch("https://jsonplaceholder.typicode.com/posts");
        // Converting the response to JSON format
        const data = await api.json();
        // Logging the fetched data to the console for debugging
        console.log(data);
        // Updating the state variable with the fetched data
        setapi_data(data);
      } catch (error) {
        // Logging any errors that occur during the fetch process
        console.error("Error fetching data:", error);
      }
    };

    // Calling the function to fetch data
    fetchDataFromAPI();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Rendering the component's UI
  return (
    <div>
      {/* Heading to describe the purpose of the component */}
      <h1>Fetching Data from API</h1>

      {/* Looping through the 'api_data' array using map() to display each data item */}
      {api_data.map((data) => (
        <div key={data.id}>
          {/* Displaying userId */}
          <p>User ID: {data.userId}</p>
          {/* Displaying the title of the post */}
          <p>Title: {data.title}</p>
        </div>
      ))}
    </div>
  );
};

// Exporting the component so it can be imported and used in other parts of the application
export default Fetch_data;
