import './ChannelInfo.css'
import Header from "./Header";
import { Link } from 'react-router-dom';
// import ChannelCard from './ChannelCard';
import channel from "../assets/channel.png";
import thumbnail from  "../assets/thumbnail.png";
// function ChannelInfo() {

//   return (
//     <div className='channel-info'>
//         <Header/>
//         <ChannelCard/>
        
//     </div>
//   )
// }

// export default ChannelInfo
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

function ChannelInfo() {
  const [channelInfo, setChannelInfo] = useState({});
  const { channelId } = useParams(); // Assuming channelId is part of the URL params

  useEffect(() => {
    const Info = {
      id: channelId,
      name: "Aaj Tak",
      description: "Aaj Tak is India's leading Hindi News Channel. Aaj Tak News channel covers the latest news in Politics, Entertainment, Bollywood, business, and sports.",
      videosCount: 14,
      // Other information...
    };
    setChannelInfo(Info);
  }, [channelId]);
  // Example video data (replace with your actual video data)
  const videos = [
    {
      id: 1,
      thumbnail: 'thumbnail-url',
      title: 'Trump appeals civil fraud judgment',
      channelName: 'Channel 1',
      views: '100',
      age: '1 week ago',
    },
    {
      id: 2,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 3,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 4,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 5,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 6,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 7,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 8,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    {
      id: 9,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },

    {
      id: 10,
      thumbnail: 'thumbnail-url',
      title: 'Video 2 Title',
      channelName: 'Channel 2',
      views: '200',
      age: '2 weeks ago',
    },
    // Add more video data as needed
  ];

  return (
    <div className='channel-info'>
      <Header/>
      <div className="info-card">
        <div className="info-card__icon">
          <img src={channel} className="info-card__img" alt="Icon" />
        </div>
        <div className="info-card__info">
          <p className="info-card__title">{channelInfo.name}</p>
          <p className="info-card__videos">{channelInfo.videosCount} vidoes</p>
          <p className="info-card__description">{channelInfo.description}</p>
        </div>
      </div>
      <hr className="line" /> 
      <div className='videos-info'>
      <div className="container">
        <div className="row">
      {videos.map(video => (
         <div className="col-md-3" key={video.id}>
          <div className="channelInfo-card">
            {/* <img src={video.thumbnail} className="hcard__img" alt="ima" /> */}
            <img src={thumbnail} className='ccard__img'alt="img"/>
            <div className="channelInfo-card__details">
              <img src={channel} className="card__channel" alt="channel" />
              <div className="channelInfo-card__info">
                <p className="channelInfo-card__title">{video.title}</p>
                <p className="channelInfo-card__channelName">{video.channelName}</p>
                <div className="channelInfo-card__details channelInfo-card__info">
                  <p className="channelInfo-card__views">{video.views} lakh views •</p>
                  <p className="channelInfo-card__age">{video.age}</p>
                </div>
              </div>
            </div>
          </div>
          </div>

        ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;

