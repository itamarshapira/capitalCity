import React, { useState } from "react"; // Importing React and useState for managing the input state
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap for styling

const CountryInput = ({ fetchCapital }) => {
  // State to hold the user's input (country name)
  const [country, setCountry] = useState("");

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value); // Updating the state with the input value
  };

  // Function to handle form submission (for now, just prevents refresh)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    console.log("Country entered:", country); // Logs the entered country to confirm functionality
    fetchCapital(country); // Calls the fetchCapital function in App with the country input
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control" // Bootstrap class for styling the input
          placeholder="Enter country name"
          value={country}
          onChange={handleInputChange} // Updates the state on each keystroke
        />
        <button type="submit" className="btn btn-primary">
          {" "}
          {/* Bootstrap styling for button */}
          Search
        </button>
      </div>
    </form>
  );
};

export default CountryInput;
