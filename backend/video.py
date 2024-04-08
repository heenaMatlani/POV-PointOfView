from datetime import datetime
from algo import get_videos

def format_age(age):
    """Format the video age as 'X days ago', 'X months ago', or 'X years ago'."""
    years = age.days // 365
    months = age.days // 30
    days = age.days
    if years > 0:
        return f"{years} {'year' if years == 1 else 'years'} ago"
    elif months > 0:
        return f"{months} {'month' if months == 1 else 'months'} ago"
    else:
        return f"{days} {'day' if days == 1 else 'days'} ago"

def calculate_age(date_uploaded):
    """Calculate the age of the video and comment."""
    today = datetime.now().date()
    age = today - date_uploaded
    return format_age(age)


def get_comments(connection, video_id):
    """Retrieve comments for a video with usernames, comment text, and comment dates."""
    cursor = connection.cursor()
    cursor.execute("""
        SELECT c.comment_text, c.comment_date, u.username
        FROM comments c
        JOIN user u ON c.user_id = u.user_id
        WHERE c.video_id = %s
        ORDER BY c.comment_date DESC
    """, (video_id,))
    comments = cursor.fetchall()
    return comments


def is_video_liked(connection, user_id, video_id):
    """Check if a video is liked by a user."""
    cursor = connection.cursor()
    cursor.execute("""
        SELECT COUNT(*) FROM liked_videos WHERE user_id = %s AND video_id = %s
    """, (user_id, video_id))
    count = cursor.fetchone()[0]
    return count > 0

def update_watch_history(connection, user_id, video_id, genre):
    """Update the user's watch history for a video."""
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO watch_history (user_id, video_id, genre, views) 
        VALUES (%s, %s, %s, 1)
        ON DUPLICATE KEY UPDATE views = views + 1
    """, (user_id, video_id, genre))
    connection.commit()



def get_video_views(connection, video_id):
    """Retrieve the total views for a video."""
    cursor = connection.cursor()
    cursor.execute("""
        SELECT SUM(views) FROM watch_history WHERE video_id = %s
    """, (video_id,))
    total_views = cursor.fetchone()[0]
    return int(total_views) if total_views else 1

def get_like_count(connection, video_id):
    """Retrieve the total number of likes for a video."""
    cursor = connection.cursor()
    cursor.execute("""
        SELECT COUNT(*) FROM liked_videos WHERE video_id = %s
    """, (video_id,))
    like_count = cursor.fetchone()[0]
    return int(like_count)

def video_details(connection, video_id, user_id):
    """Retrieve video details along with comments and like status."""
    cursor = connection.cursor()

    cursor.execute("""
        SELECT v.*, c.channel_name, c.channel_icon, c.channel_id 
        FROM videos v 
        INNER JOIN channel c ON v.channel_id = c.channel_id
        WHERE v.video_id = %s
    """, (video_id,))
    video_details = cursor.fetchone()

    if not video_details:
        return None

    update_watch_history(connection, user_id, video_id, video_details[7])

    video_age = calculate_age(video_details[4])
    video_views = get_video_views(connection, video_id)
    is_liked = is_video_liked(connection, user_id, video_id)
    comments = get_comments(connection, video_id)
    side_recom = get_videos(connection, user_id, 10)
    side_recommendations = []
    for id in side_recom:
        cursor.execute("""
            SELECT v.*, c.channel_name, c.channel_icon 
            FROM videos v 
            INNER JOIN channel c ON v.channel_id = c.channel_id
            WHERE v.video_id = %s
        """, (int(id),))
        fetched_video = cursor.fetchone()
        if fetched_video:
            fetched_video = list(fetched_video)
            fetched_video.append(calculate_age(fetched_video[4]))
            fetched_video.append(get_video_views(connection,int(id)))
            fetched_video = tuple(fetched_video)
            side_recommendations.append(fetched_video)

    like_count = get_like_count(connection, video_id)
    video_data = [video_details, video_age, int(video_views), is_liked, comments, side_recommendations, int(like_count)]

    return video_data

