import React from 'react'

const Card = (props) => {
  return (
    <div className="card--div">
        <img className="card--image" src={props.travelImg}></img>
        <div className="card--content">
            <span className="place-span">
                <img className="pin--icon" src="/images/pin.png"></img>
                <h5>{props.country}</h5>
                
            </span>
            <h2>{props.name}</h2>
            <h5>{props.date}</h5>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Card