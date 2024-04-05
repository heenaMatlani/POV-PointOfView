from flask import Flask, jsonify, request, redirect, url_for, session
from flask_cors import CORS
from algo import get_videos
from video import calculate_age, get_video_views, video_details, get_comments

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
    username = data.get('username')
    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM user WHERE email_id=%s", (email,))
    user = cursor.fetchone()

    if user:
        return jsonify({"message": "User already exists. Please log in."}), 400

    insert_query = "INSERT INTO user (email_id, password,username) VALUES (%s, %s,%s)"
    cursor.execute(insert_query, (email, password, username))
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
        cursor.execute("""
            SELECT v.*, c.channel_name, c.channel_icon 
            FROM videos v 
            INNER JOIN channel c ON v.channel_id = c.channel_id
            WHERE v.video_id = %s
        """, (int(video_id),))
        fetched_video = cursor.fetchone()
        if fetched_video:
            fetched_video = list(fetched_video)
            fetched_video.append(calculate_age(fetched_video[4]))
            fetched_video.append(get_video_views(connection,int(video_id)))
            fetched_video = tuple(fetched_video)
            video_data.append(fetched_video)
    return jsonify(video_data)

@app.route('/explore', methods=['POST'])
def get_genre_videos():
    """Function for retrieving videos of a particular genre."""

    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    data = request.json
    genre = data.get('genre')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT v.*, c.channel_name, c.channel_icon FROM videos v INNER JOIN channel c ON v.channel_id = "
                   "c.channel_id WHERE genre=%s", (genre,))
    videos = cursor.fetchall()
    modified_videos = []
    if videos:
        for video in videos:
            video = list(video)
            video.append(calculate_age(video[4]))
            video.append(get_video_views(connection, video[0]))
            modified_videos.append(tuple(video))
    cursor.close()
    return jsonify(modified_videos)


@app.route('/searched', methods=['GET'])
def get_searched_videos():
    """Function for retrieving videos of a searched title."""
    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    search_query = request.args.get('query')
    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT v.*, c.channel_name, c.channel_icon FROM videos v INNER JOIN channel c ON v.channel_id = "
                   "c.channel_id WHERE v.video_title LIKE %s", ('%' + search_query + '%',))
    searched_videos = cursor.fetchall()
    modified_searched_videos = []
    if searched_videos:
        for video in searched_videos:
            video = list(video)
            video.append(calculate_age(video[4]))
            video.append(get_video_views(connection, video[0]))
            modified_searched_videos.append(tuple(video))
    return jsonify(modified_searched_videos)

@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    """Function for inserting feedback given by user in database."""
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

@app.route('/likedvideos')
def get_liked_videos():
    """Function for retrieving videos liked by user."""
    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT video_id FROM liked_videos WHERE user_id = %s", (user_id,))
    video_ids = cursor.fetchall()
    video_data = []
    for video_id_tuple in video_ids:
        video_id = video_id_tuple[0]
        cursor.execute("""
            SELECT v.*, c.channel_name, c.channel_icon 
            FROM videos v 
            INNER JOIN channel c ON v.channel_id = c.channel_id
            WHERE v.video_id = %s
        """, (int(video_id),))
        fetched_video = cursor.fetchone()
        if fetched_video:
            fetched_video = list(fetched_video)
            fetched_video.append(calculate_age(fetched_video[4]))
            fetched_video.append(get_video_views(connection,int(video_id)))
            fetched_video = tuple(fetched_video)
            video_data.append(fetched_video)
    return jsonify(video_data)


@app.route('/toggle-like', methods=['POST'])
def toggle_like():
    """Function for handling like click done by user."""
    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    data = request.json
    video_id = data.get('videoId')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM liked_videos WHERE user_id = %s AND video_id = %s", (user_id, video_id))
    count = cursor.fetchone()[0]

    if count > 0:
        cursor.execute("DELETE FROM liked_videos WHERE user_id = %s AND video_id = %s", (user_id, video_id))
        connection.commit()
        return jsonify({"message": "Like removed successfully."}), 200
    else:
        cursor.execute("INSERT INTO liked_videos (user_id, video_id) VALUES (%s, %s)", (user_id, video_id))
        connection.commit()
        return jsonify({"message": "Like added successfully."}), 200

@app.route('/submit-comment', methods=['POST'])
def submit_comment():
    """Function for inserting comment given by user in database."""
    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    data = request.json
    video_id = data.get('videoId')
    comment_text = data.get('comment')

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("INSERT INTO comments (video_id, comment_text, user_id, comment_date) VALUES (%s, %s, %s, NOW())",
                   (video_id, comment_text, user_id))
    comments = get_comments(connection, int(video_id))
    connection.commit()

    return jsonify(comments), 200

@app.route('/video/<int:video_id>', methods=['GET'])
def get_video_details(video_id):
    """Endpoint to get video details."""
    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    video_data = video_details(connection, int(video_id), user_id)

    if video_data:
        return jsonify(video_data), 200
    else:
        return jsonify({"message": "Video not found."}), 404


@app.route('/channels', methods=['GET'])
def get_channels():
    """Function to retrieve channel information."""

    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM channel")
    channels = cursor.fetchall()
    cursor.close()
    return jsonify(channels)


@app.route('/channels/<int:channel_id>')
def get_channel_info(channel_id):
    """Function to retrieve channel information and associated videos."""

    user_id = get_current_user()
    if user_id is None:
        return jsonify({"message": "No user logged in."}), 400

    connection = establish_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM channel WHERE channel_id = %s", (channel_id,))
    channel_info = cursor.fetchone()
    cursor.execute("SELECT * FROM videos WHERE channel_id = %s", (channel_id,))
    videos = cursor.fetchall()

    channel_data = {
        'channel': {
            'id': channel_info[0],
            'name': channel_info[1],
            'description': channel_info[2],
            'subscription_type': channel_info[3],
            'icon': channel_info[4]
        },
        'videos': []
    }

    for video in videos:
        age = calculate_age(video[4])
        views = get_video_views(connection,int(video[0]))
        video_info = {
            'video_id': video[0],
            'channel_id': video[1],
            'video_url': video[2],
            'video_thumbnail': video[3],
            'date_uploaded': video[4],
            'description': video[5],
            'video_title': video[6],
            'genre': video[7],
            'age': age,
            'views': views,
        }
        channel_data['videos'].append(video_info)

    return jsonify(channel_data)



if __name__ == "__main__":
    app.run(debug=True)
