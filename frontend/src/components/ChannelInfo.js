import "./ChannelInfo.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card.js";

function ChannelInfo() {
  const [channelInfo, setChannelInfo] = useState({});
  const [videos, setVideos] = useState([]);
  const { channelId } = useParams(); // Assuming channelId is part of the URL params

  useEffect(() => {
    fetchChannelInfo();
  }, [channelId]);

  const fetchChannelInfo = async () => {
    try {
      const response = await fetch(`/channels/${channelId}`); // Assuming you have an endpoint to fetch channel details
      const data = await response.json();
      setChannelInfo(data.channel);
      setVideos(data.videos);
    } catch (error) {
      console.error("Error fetching channel info:", error);
    }
  };

  return (
    <div className="channel-info">
      <Header />
      {channelInfo && Object.keys(channelInfo).length > 0 && (
        <div className="info-card">
          <div className="info-card__icon">
            <img src={channelInfo.icon} className="info-card__img" alt="Icon" />
          </div>
          <div className="info-card__info">
            <p className="info-card__title">{channelInfo.name}</p>
            <p className="info-card__videos">{videos.length} videos</p>
            <p className="info-card__description">{channelInfo.description}</p>
          </div>
        </div>
      )}
      <hr className="line" />
      <div className="videos-info">
        <div className="container">
          <div className="row">
            {videos &&
              videos.length > 0 &&
              videos.map((video) => (
                <div className="col-md-3" key={video.id}>
                  <Link className="video-link" to={`/video/${video.video_id}`}>
                    <Card
                      className="recommended-card"
                      video={video.video_url}
                      thumbnail={video.video_thumbnail}
                      channel={channelInfo.icon}
                      title={video.video_title}
                      channelName={channelInfo.name}
                      views={video.views}
                      age={video.age}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfo;

// <div className="channelInfo-card">
//             {/* <img src={video.thumbnail} className="hcard__img" alt="ima" /> */}
//             <img src={video.video_thumbnail} className='ccard__img'alt="img"/>
//             <div className="channelInfo-card__details">
//               <img src={channelInfo.icon} className="card__channel" alt="channel" />
//               <div className="channelInfo-card__info">
//                 <p className="channelInfo-card__title">{video.video_title}</p>
//                 <p className="channelInfo-card__channelName">{channelInfo.name}</p>
//                 <div className="channelInfo-card__details channelInfo-card__info">
//                   <p className="channelInfo-card__views">{video.views} lakh views •</p>
//                   <p className="channelInfo-card__age">{video.age}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
