import mysql.connector
import pandas as pd
from sklearn.neighbors import NearestNeighbors

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="matlani01k",
    database="pov"
)

user_id = input("Enter user id: ")
user_watch_history = pd.read_sql_query(f"SELECT user_id, video_id, genre, views FROM watch_history WHERE user_id = {user_id}", conn)

video_data = pd.read_sql_query("SELECT video_id, genre FROM videos", conn)
merged_data = pd.merge(user_watch_history, video_data, on='genre')

X = merged_data[['user_id', 'video_id_y']].drop_duplicates().values

knn = NearestNeighbors(n_neighbors=10, metric='cosine')
knn.fit(X)

target_user = user_watch_history[['user_id', 'video_id']].iloc[0].values.reshape(1, -1)
distances, indices = knn.kneighbors(target_user)

recommended_videos = merged_data.iloc[indices[0]]['video_id_y'].values
recommended_genres = merged_data.iloc[indices[0]]['genre'].values

print(f'Recommended Videos: {recommended_videos}')
print(f'Recommended Genres: {recommended_genres}')

