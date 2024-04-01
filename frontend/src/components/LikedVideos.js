import React, { useState, useEffect }  from "react";
import "./LikedVideos.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import thumbnail from "../assets/thumbnail.png";

function LikedVideos() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/likedvideos')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setVideos(data);
                } else {
                    setVideos([]);
                }
            })
            .catch(error => console.log(error));
    }, []);

  return (
    <div className="likedVideos">
      <Header/>
      <div class="container">
        <div class="row">
            {videos.map(video => (
                <div key={video[0]} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <Link className="video-link" to={`/video/${video[0]}`}>
                        <Card
                            className="recommended-card"
                            video={video[2]}
                            thumbnail={video[3]}
                            channel={video[9]}
                            title={video[6]}
                            channelName = {video[8]}
                            views = {video[11]}
                            age = {video[10]}
                          />
                        </Link>
                    </div>
                ))}

        </div>
        
         
      </div>
    </div>
  );
}

export default LikedVideos;
