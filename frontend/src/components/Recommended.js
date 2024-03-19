import React, { useState, useEffect } from "react";
import "./Recommended.css";
import Card from "./Card.js";
import { Link } from "react-router-dom";

function Recommended() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/homepage')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.log(error));
    }, []);

    return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
                    {videos.map(video => (
                        <div key={video.video_id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <Link className="video-link" to="/video">
                                <Card
                                    className="recommended-card"
                                    video={video.video_url}
                                    thumbnail={video.video_thumbnail}
                                    channel={video.channel_id}
                                    description={video.title}
                                />
                            </Link>
                        </div>
                    ))}
        </div>
      </div>
    </div>
  );
}

export default Recommended;
