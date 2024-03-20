import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.thumbnail} className="hcard__img" alt="ima" />
      <div className="card__details">
        <img src={props.channel} className="card__channel" alt="channel" />
        <div className="card__info">
          <p className="card__title">{props.title}</p>
          <p className="card__channelName">{props.channelName}</p>
          <div className="card__details">
            <p className="card__views">{props.views} lakh views •</p>
            <p className="card__age">{props.age} months ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
