# IMPORTS: Import necessary classes and functions from Flask
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS 
#! pip install flask-cors : we made that istallantion to avoid cors problem !

import psycopg2 # Import psycopg2 to connect with PostgreSQL

# ROUTING: 

# * Create an instance of the Flask class for our web app
# '__name__' is a special variable that gets the name of the module. Here, it helps Flask locate resources.
app = Flask(__name__)
CORS(app) #! enable all cors 


# * Define a route (URL endpoint) for the root URL ('/') and bind it to the `home` function
# When users visit 'http://127.0.0.1:5000/', this function will be triggered
@app.route('/')
def home():
    # Return a simple message as the response for the root URL
    return "Flask server is running!"

#* New route to get the capital of a country
@app.route('/get-capital', methods=['GET'])

def get_capital(): #* get capital function : 
    
    # LOGIC: Get the country from the request's query parameters
    country = request.args.get('country') # country is the name ive chosen it could be nation or anything else........ and this 'country' is the argument that we sent from frontend
    # todo: postman check example :  http://127.0.0.1:5000/get-capital?country=Spain 
    
    # DATABASE CONNECTION: Attempts to connect to the PostgreSQL (using psycopg2).
    connection = None #! important : to init connection as none.
    try:
        connection = psycopg2.connect(
            dbname="country_db",  # db name
            user="postgres",  #  PostgreSQL username. defualt: (postgres)
            password="12345",  #  PostgreSQL password
            host="localhost"  # db host. defualt: (localhost)
        )
        
        #* Creates a cursor to execute database queries:
        cursor = connection.cursor()  #* The cursor allows us to execute SQL commands and retrieve data.

        # DATABASE QUERY: Execute SQL query to find the capital city for the given country
        query = "SELECT capital_city FROM country_capitals WHERE country_name = %s" #* The '%s' placeholder is safely replaced by the actual country name.
        cursor.execute(query, (country,)) # is how we execute our SQL query with a parameterized value in Python
        #* Explanetion: 1.) (query): The SQL command with %s as a placeholder.
        #* Second argument 2.) (country): A tuple containing the actual value that will replace %s.
        
        #! the result of the query: 
        result = cursor.fetchone()  #* Fetches the first row of the result, or None if no matching country is found

        # LOGIC: Check if the capital was found in the database
        if result:
            capital = result[0] #* Extracts the capital city from the query result
            return jsonify({'capital': capital}) #* Returns the capital city as a JSON response
        else:
            return jsonify({'error': 'Country not found capital city'}), 404

    except Exception as e:
        # ERROR HANDLING: Return an error message if something goes wrong with the database operation
        return jsonify({'error': str(e)}), 500

    finally:
        # DATABASE CONNECTION: Close the cursor and connection
        if connection:
            cursor.close()
            connection.close()
    

# ROUTING: Run the Flask app only if this file is executed directly
# 'debug=True' allows Flask to auto-reload the server when code changes, helpful during development
if __name__ == '__main__':
    app.run(debug=True)
    
# todo : to run the server: python app.py
