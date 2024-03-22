from flask import Flask, jsonify, request, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def establish_connection(host='localhost', user='root', passwd='Amritjot@1232', database='pov'):
    """Establishes connection with local database, throws exception(not error) if connection not established"""
    import mysql.connector as cntr
    from mysql.connector import Error
    connection = None
    try:
        connection = cntr.connect(
            host=host,
            user=user,
            passwd=passwd,
            database=database
        )

        return connection

    except Error as e:
        return f'An error occured : {e}'


@app.route('/login', methods=['POST'])
def login_user():
    """Function used to login the user into web application"""

    data = request.json
    email = data.get('email')
    password = data.get('password')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM user WHERE email_id=%s", (email,))
    user = cursor.fetchone()

    if not user:
        return jsonify({"message": "User not found. Please sign up."}), 400

    if not (user[2] == password):
        return jsonify({"message": "Invalid password."}), 400

    return jsonify({"message": "User logged in successfully."}), 200


@app.route('/signup', methods=['POST'])
def signup_user():
    """Function used to create user in database"""

    data = request.json
    email = data.get('email')
    password = data.get('password')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM user WHERE email_id=%s", (email,))
    user = cursor.fetchone()

    if user:
        return jsonify({"message": "User already exists. Please log in."}), 400

    insert_query = "INSERT INTO user (email_id, password) VALUES (%s, %s)"
    cursor.execute(insert_query, (email, password))
    connection.commit()

    return jsonify({"message": "User signed up successfully."}), 200


@app.route('/homepage')
def get_videos():
    """Function for checking video retrieval."""

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM videos")
    videos = cursor.fetchall()
    cursor.close()
    return jsonify(videos)


if __name__ == "__main__":
    app.run(debug=True)
