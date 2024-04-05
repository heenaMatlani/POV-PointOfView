import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import "./Channel.css";
import Header from "./Header";
import ChannelCard  from "./ChannelCard";
function Channel() {

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    try {
      const response = await fetch('/channels');
      const data = await response.json();
      setChannels(data);
    } catch (error) {
      console.error('Error fetching channels:', error);
    }
  };

return (
  <div className='channel'>
    <Header/>
    <div className="channel__content">
    {channels.map(channel => (
        <div key={channel[0]} className='channel__card'>
          <ChannelCard
           channel={channel[0]}
           thumbnail={channel[4]}
           channelName={channel[1]}
           channelDescription={channel[2]}

          />

            </div>
      ))}
      </div>
  </div>
)
}

export default Channel;
