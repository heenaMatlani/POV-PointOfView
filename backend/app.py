from flask import Flask, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db_host = 'localhost'
db_user = 'root'
db_password = 'pass'
db_name = 'pov'

connection = pymysql.connect(host=db_host, user=db_user, password=db_password, database=db_name)
@app.route('/homepage')
def get_videos():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM videos")
    videos = cursor.fetchall()
    cursor.close()
    return jsonify(videos)


if __name__ == "__main__":
    app.run(debug=True)
