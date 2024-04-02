import React from "react";
import "./ChannelCard.css";
import { Link } from 'react-router-dom';
import channel from "../assets/channel.png";
function ChannelCard(props) {
  return (
    <div className="channel-card">
      <div className="channel-card__icon">
        <img src={channel} className="channel-card__img" alt="Icon" />
      </div>
      <div className="channel-card__info">
        <p className="channel-card__title">{props.channelName}</p>
        <p className="channel-card__description">{props.channelDescription}</p>
        <div className="channel-button">
        <button className="channel-card__button">VISIT</button>
        </div>
      </div>

    </div>
  );
}

export default ChannelCard;
