import React, { useEffect, useRef } from "react";
import "./Card.css";

function Card(props) {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      const lineHeight = parseInt(window.getComputedStyle(titleElement).lineHeight);
      const maxHeight = lineHeight * 2;
      if (titleElement.clientHeight > maxHeight) {
        titleElement.style.webkitLineClamp = "2";
      }
    }
  }, [props.title]);

  return (
    <div className="card">
      <img src={props.thumbnail} className="hcard__img" alt="ima" />
      <div className="card__details">
        <img src={props.channel} className="card__channel" alt="channel" />
        <div className="card__info">
          <p ref={titleRef} className="card__title">{props.title}</p>
          <p className="card__channelName">{props.channelName}</p>
          <div className="card__details card__info">
            <p className="card__views">{props.views} lakh views •</p>
            <p className="card__age">{props.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
