import React, { useState } from "react"; // Importing React and useState for managing the input state
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap for styling
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"; // Importing necessary React-Bootstrap components

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
    <Container className="my-3">
      {" "}
      {/* Bootstrap container for centered layout */}
      <Row className="justify-content-center">
        {" "}
        {/* Centers the form horizontally */}
        <Col lg={4} md={6} sm={8}>
          {" "}
          {/* Responsive width for different screen sizes */}
          <Form onSubmit={handleSubmit}>
            {" "}
            {/* Form with submit handler */}
            <InputGroup>
              {" "}
              {/* Bootstrap InputGroup to keep input and button aligned */}
              <Form.Control
                type="text"
                placeholder="Enter country name"
                value={country}
                onChange={handleInputChange} // Updates the state on each keystroke
              />
              <Button type="submit" variant="primary">
                {" "}
                {/* Bootstrap button with primary styling */}
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInput;
