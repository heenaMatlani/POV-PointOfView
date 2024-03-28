import React from "react";
import "./ChannelCard.css";
function ChannelCard(props) {
  return (
    <div className="ccard">
      <div className="ccard__thumbnail">
        <img src={props.thumbnail} className="ccard__img" alt="thumbnail" />
      </div>
      <div className="ccard__description">
        <p className="ccard__text">{props.title}</p>
        <div className="ccard__details">
          <p className="ccard__views">{props.views} lakh views •</p>
          <p className="ccard__age">{props.age}</p>
        </div>
        <div className="ccard__details">
          <img src={props.channel} className="ccard__channel" alt="channel" />
          <p className="ccard__channelName">{props.channelName}</p>
        </div>
        <p className="ccard__channelDescription">{props.channelDescription}</p>
      </div>
    </div>
  );
}

export default ChannelCard;
