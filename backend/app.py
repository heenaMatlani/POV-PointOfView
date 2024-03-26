from flask import Flask, jsonify, request, redirect, url_for, session
from flask_cors import CORS
from algo import get_videos

app = Flask(__name__)
CORS(app)

current_user_id = None
def establish_connection(host='localhost', user='root', passwd='Aa@241203', database='pov'):
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
    global current_user_id

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

@app.route('/logout', methods=['POST'])
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
def get_videos_list():
    """Function for video list retrieval."""

    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    video_ids = get_videos(connection, user_id, 36)
    cursor = connection.cursor()
    video_data = []
    for video_id in video_ids:
        cursor.execute("SELECT * FROM videos WHERE video_id=%s", (int(video_id),))
        fetched_video = cursor.fetchone()
        if fetched_video:
            video_data.append(fetched_video)
    return jsonify(video_data)

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


@app.route('/searched', methods=['GET'])
def get_searched_videos():
    search_query = request.args.get('query')
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

@app.route('/likedVideos')
def get_liked_videos():

    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT video_id FROM liked_videos WHERE user_id LIKE %s", (user_id,))
    video_ids = cursor.fetchall()
    video_data = []
    for video_id in video_ids:
        cursor.execute("SELECT * FROM videos WHERE video_id=%s", (int(video_id),))
        fetched_video = cursor.fetchone()
        if fetched_video:
            video_data.append(fetched_video)
    return jsonify(video_data)

if __name__ == "__main__":
    app.run(debug=True)
