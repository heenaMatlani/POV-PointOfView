from flask import Flask, jsonify, request, redirect, url_for, session
from flask_cors import CORS
# from algo import get_videos

app = Flask(__name__)
CORS(app)

current_user_id = None
def establish_connection(host='localhost', user='root', passwd='matlani01k', database='pov'):
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
    global current_user_id, current_email

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

    current_user_id = user[0]

    return jsonify({"message": "User logged in successfully."}), 200

def logout_user():
    """Endpoint to handle user logout"""
    global current_user_id

    current_user_id = None
    return jsonify({"message": "User logged out successfully."}), 200

def get_current_user():
    """Endpoint to retrieve current user information"""
    global current_user_id

    if current_user_id is None:
        return None

    return current_user_id

@app.route('/signup', methods=['POST'])
def signup_user():
    """Function used to create user in database"""

    global current_user_id

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

    cursor.execute("SELECT * FROM user WHERE email_id=%s", (email,))
    user = cursor.fetchone()
    current_user_id = user[0]

    return jsonify({"message": "User signed up successfully."}), 200


@app.route('/homepage')
def get_videos():
    """Dummy function for checking video retrieval."""

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM videos")
    videos = cursor.fetchall()
    cursor.close()
    return jsonify(videos)

@app.route('/explore', methods=['POST'])
def get_genre_videos():
    """Function for retrieving videos of a particular genre."""
    data = request.json
    genre = data.get('genre')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM videos WHERE genre=%s", (genre,))
    videos = cursor.fetchall()
    cursor.close()
    return jsonify(videos)


@app.route('/searched', methods=['POST'])
def get_searched_videos():
    search_query = request.json.get('search_query')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM videos WHERE video_title LIKE %s", ('%' + search_query + '%',))
    searched_videos = cursor.fetchall()

    return jsonify(searched_videos)

@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():

    feedback_text = request.json.get('feedback_text')

    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("INSERT INTO feedback (user_id, feedback_text, feedback_date) VALUES (%s, %s, NOW())", (user_id, feedback_text))
    connection.commit()
    cursor.close()

    return jsonify({"message": "Feedback submitted successfully."}), 200

if __name__ == "__main__":
    app.run(debug=True)
