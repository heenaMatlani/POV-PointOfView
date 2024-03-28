import React from "react";
import "./HorizontalCard.css";
function HorizontalCard(props) {
  return (
    <div className="hcard">
      <div className="hcard__thumbnail">
        <img src={props.thumbnail} className="hcard__img" alt="thumbnail" />
      </div>
      <div className="hcard__description">
        <p className="hcard__text">{props.title}</p>
        <div className="hcard__details">
          <p className="hcard__views">{props.views} lakh views •</p>
          <p className="hcard__age">{props.age}</p>
        </div>
        <div className="hcard__details">
          <img src={props.channel} className="hcard__channel" alt="channel" />
          <p className="hcard__channelName">{props.channelName}</p>
        </div>
        <p className="hcard__channelDescription">{props.channelDescription}</p>
      </div>
    </div>
  );
}

export default HorizontalCard;
