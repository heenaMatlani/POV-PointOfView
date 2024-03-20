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
    let channelName = "Aaj Tak"
    let views = "12"
    let age = "12"
    return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
                    {videos.map(video => (
                        <div key={video[0]} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <Link className="video-link" to="/video">
                                <Card
                                    className="recommended-card"
                                    video={video[2]}
                                    thumbnail={video[3]}
                                    channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
                                    title={video[6]}
                                    channelName = {channelName}
                                    views = {views}
                                    age = {age}
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
