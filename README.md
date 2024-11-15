# Country Capital Lookup 🌍

A simple web application that allows users to enter a country name and retrieve the capital city from a database. This project uses a React frontend, a Flask backend, and a PostgreSQL database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)

---

## Features

- User-friendly input form to search for a country’s capital city.
- Real-time data retrieval from a PostgreSQL database.
- Interactive UI with Bootstrap styling for a responsive experience.
- Clear error messages when a country is not found or when there's a connection issue.

## Technologies Used

- **Frontend**: React, React-Bootstrap
- **Backend**: Flask, Flask-CORS for handling CORS issues
- **Database**: PostgreSQL

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** (for frontend dependencies)
- **Python 3** and **pip** (for backend dependencies)
- **PostgreSQL** (for database)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/capitalCity.git
cd capitalCity
```

### 2. Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up PostgreSQL:

   - Create a PostgreSQL database named `country_db`.
   - Add a table named `country_capitals` with the necessary fields (`country_name` and `capital_city`). You can use this SQL command to create the table:
     ```sql
     CREATE TABLE country_capitals (
         id SERIAL PRIMARY KEY,
         country_name VARCHAR(100),
         capital_city VARCHAR(100)
     );
     ```
   - Populate the table with some country-capital data if needed.

5. Run the Flask server:

   ```bash
   python app.py
   ```

   The server should start on `http://127.0.0.1:5000`.

### 3. Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

   The app should start on `http://localhost:3000`.

---

## Usage

1. Open the React app in your browser at `http://localhost:3000`.
2. Enter a country name in the input field and click **Search**.
3. The app will display the capital city or an error message if the country is not found.

---

## Project Structure

```
capitalCity/
├── backend/
│   ├── app.py                # Main Flask application
│   ├── requirements.txt      # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js            # Main React component
│   │   ├── components/
│   │   │   ├── CountryInput.js # Input component
│   │   │   ├── CapitalDisplay.js # Display component
│   ├── package.json          # Frontend dependencies
└── README.md
```

---

## API Endpoints

### `GET /get-capital`

- **Description**: Retrieves the capital of a country.
- **Query Parameters**:
  - `country` (string): The name of the country to look up.
- **Example Request**:
  ```http
  GET http://127.0.0.1:5000/get-capital?country=France
  ```
- **Example Response**:
  ```json
  {
    "capital": "Paris"
  }
  ```

---

## Screenshots

- Add screenshots here if desired to show the UI and responses.

---

## Future Improvements

- **Authentication**: Limit access to authorized users only.
- **Enhanced Error Handling**: Add more detailed error messages and validation.
- **Database Expansion**: Populate the database with more countries and capital cities.
- **UI Improvements**: Add animations and make it more visually appealing.

---

## Acknowledgments

Thanks to [React](https://reactjs.org/), [Flask](https://flask.palletsprojects.com/), and [PostgreSQL](https://www.postgresql.org/) communities for their documentation and resources.

---

## License

This project is licensed under the MIT License.
