// CapitalDisplay.jsx
import React from "react";
import { Card } from "react-bootstrap";

const CapitalDisplay = ({ capital, error }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Card
        style={{ width: "18rem", border: "2px solid #007bff" }}
        className="text-center"
      >
        <Card.Body>
          {error ? (
            <Card.Text className="text-danger">{error}</Card.Text>
          ) : (
            <>
              <Card.Title>Capital City</Card.Title>
              <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {capital}
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CapitalDisplay;
