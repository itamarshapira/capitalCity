import React, { useState } from 'react'; // Importing React and useState for managing component state
import CountryInput from './components/CountryInput/CountryInput'; // Importing the CountryInput component
import CapitalDisplay from './components/CapitalDisplay/CapitalDisplay'; // Importing the CapitalDisplay component
import "./App.css"

const App = () => {
  // State to hold the result from the backend
  const [result, setResult] = useState(null);

  // Function to fetch the capital city from the backend
  const fetchCapital = async (country) => {
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
      <h1 className="text-center">Country Capital Lookup</h1>
      {/* Passing fetchCapital to CountryInput */}
      <CountryInput fetchCapital={fetchCapital} /> 
      {/* Displaying the result */}
      {result && (
        <div className="mt-4">
          {result.error ? (
            <p className="text-danger">{result.error}</p>
          ) : (
            <p>Capital: {result.capital}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App; // Exporting the App component as the default export
