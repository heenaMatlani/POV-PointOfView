import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import "./Channel.css";
import Header from "./Header";
import ChannelCard  from "./ChannelCard";
import channel from "../assets/channel.png";
function Channel() {
  let channels = [
    {
      id: 1,
      name: 'AAJTAK',
      description: 'Aaj Tak is India leading Hindi News Channel. Aaj Tak News channel covers latest news in Politics, Entertainment, Bollywood, business and sports.',
      icon: {channel},
    },
    {
      id: 2,
      name: 'ABP',
      description: 'ABP News is an Indian news channel owned by ABP Group. It is known for its unbiased and comprehensive news coverage.',
      icon: {channel},
    },
    // Add more channel objects as needed
  ];
return (
  <div className='channel'>
    <Header/>
    <div className="channel__content">
    {channels.map(channel => (
        <div key={channel.id} className='channel__card'>
          <ChannelCard
           channel={channel.name}
           thumbnail={channel.icon}
           channelName={channel.name}
           channelDescription={channel.description}
          />
        {/* <Link to={`/visit/${channel.id}`} className='visit__button'>
              Visit
            </Link> */}
            </div>
      ))}
      </div>
  </div>
)
}

export default Channel;
