// ! collabrate with GERA

import React, { useState } from 'react'; // Importing React and useState for managing component state
import CountryInput from './components/CountryInput/CountryInput'; // Importing the CountryInput component
import CapitalDisplay from './components/CapitalDisplay/CapitalDisplay'; // Importing the CapitalDisplay component
import "./App.css"

const App = () => {
  // State to hold the result from the backend
  const [result, setResult] = useState(null);

  // Function to fetch the capital city from the backend
  const fetchCapital = async (country) => { //! NOTICE : this func pass as a props to CountryInput component ! 
    try {
      const response = await fetch(`http://127.0.0.1:5000/get-capital?country=${country}`);
      const data = await response.json();
      setResult(data); // Store the result from the backend in the state
    } catch (error) {
      setResult({ error: 'Unable to connect to the server' });
    }
  };

  return (
   <div className="app-background">
      {/* Main title for the app */}
      <h1 className="text-center">Country Capital Lookup</h1>
      
      {/* Passing the fetchCapital function to CountryInput to allow it to trigger the API request */}
      <CountryInput fetchCapital={fetchCapital} /> 

      {/* Conditionally rendering CapitalDisplay to show the result only if there's data in the state */}
      {result && (
        <CapitalDisplay 
          capital={result.capital} // Passing the capital from result (if available)
          error={result.error} // Passing the error from result (if available)
        />
      )}
    </div>
  );
};

export default App; // Exporting the App component as the default export
