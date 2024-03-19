import React from 'react'
import './HorizontalCard.css'
function HorizontalCard(props) {
  return (
    <div className="hcard">
     <div className="card">
      <img src={props.thumbnail} className="card-img-top menuu" alt="ima" />
      <div className="card-body">
        <img src={props.channel} className="channel" alt="channel" />
        <p className="card-text">{props.description}</p>
      </div>
    </div>
    </div>
  )
}

export default HorizontalCard
