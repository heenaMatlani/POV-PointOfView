from datetime import datetime

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
    """Retrieve comments for a video with dates."""
    cursor = connection.cursor()
    cursor.execute("""
        SELECT comment_text, comment_date FROM comments WHERE video_id = %s ORDER BY comment_date DESC
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

def update_watch_history(connection, user_id, video_id, genre, views):
    """Update the user's watch history for a video."""
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO watch_history (user_id, video_id, genre, views) VALUES (%s, %s, %s, %s)
        ON DUPLICATE KEY UPDATE views = views + %s
    """, (user_id, video_id, genre, views, views))
    connection.commit()


def get_video_views(connection, video_id):
    """Retrieve the total views for a video."""
    cursor = connection.cursor()
    cursor.execute("""
        SELECT SUM(views) FROM watch_history WHERE video_id = %s
    """, (video_id,))
    total_views = cursor.fetchone()[0]
    return total_views if total_views else 1
