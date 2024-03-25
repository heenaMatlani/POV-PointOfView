import mysql.connector
import pandas as pd
from sklearn.neighbors import NearestNeighbors
import random

def get_recommended_videos(conn, n, user_watch_history):
    """Function used to implement the algorithm to get recommended video and return it"""

    video_data = pd.read_sql_query("SELECT video_id, genre FROM videos", conn)
    merged_data = pd.merge(user_watch_history, video_data, on='genre')

    X = merged_data[['user_id', 'video_id_y']].drop_duplicates().values
    knn = NearestNeighbors(n_neighbors=n, metric='cosine')
    knn.fit(X)

    target_user = user_watch_history[['user_id', 'video_id']].iloc[0].values.reshape(1, -1)
    distances, indices = knn.kneighbors(target_user)

    recommended_videos = merged_data.iloc[indices[0]]['video_id_y'].values
    unique_recommended_videos = list(set(recommended_videos))

    return unique_recommended_videos

def get_random_videos(conn, n, videos):
    """Function used to fetch random videos from database"""

    cursor = conn.cursor()
    cursor.execute("SELECT genre FROM videos")
    genres = cursor.fetchall()

    random_videos = set()
    while len(random_videos) < n:
        for genre in genres:
            cursor.execute("SELECT video_id FROM videos WHERE genre = %s ORDER BY RAND() LIMIT 1", genre)
            video_id = cursor.fetchone()
            if video_id and video_id not in videos:
                random_videos.add(video_id[0])
                if len(random_videos) == n:
                    break

    cursor.close()
    random_videos = list(random_videos)
    random.shuffle(random_videos)
    return random_videos

def get_videos(conn, user_id, num_videos):
    """Function used to return random or recommended video based on user history"""

    user_watch_history = pd.read_sql_query(f"SELECT user_id, video_id, genre, views FROM watch_history WHERE user_id = {user_id}", conn)
    videos = []
    if user_watch_history.empty:
        return get_random_videos(conn, num_videos, videos)

    videos = get_recommended_videos(conn, num_videos, user_watch_history)
    count = len(videos)

    if count < num_videos:
        videos.extend(get_random_videos(conn, num_videos-count, videos))
    random.shuffle(videos)
    return videos
