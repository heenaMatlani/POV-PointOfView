import React from 'react'
import './SideCard.css'
function SideCard(props) {
  return (
    <div className='scard'>
      <div className="scard__thumbnail">
        <img src={props.thumbnail} className="scard__img" alt="thumbnail" />
      </div>
      <div className="scard__description">
        <p className="scard__text">{props.title}</p>
        <div className="scard__details">
          <p className="scard__views">{props.views} lakh views •</p>
          <p className="scard__age">{props.age}</p>
        </div>
        <div className="scard__details">
          <img src={props.channel} className="scard__channel" alt="channel" />
          <p className="scard__channelName">{props.channelName}</p>
        </div>
        <p className="scard__channelDescription">{props.channelDescription}</p>
      </div>
    </div>
  )
}

export default SideCard
