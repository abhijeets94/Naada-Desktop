import React from "react";
import "./EventsComp.css";

const EventsComp = (props) => {
  return (
    <div className="eventsComponent">
      <div className="imageEvent">
        <img src={props.imgURL} alt="" />
      </div>
      <div className="eventNameTime">
        <p>{props.EventName}</p>
      </div>
      <div className="eventPrice">
        <p>${props.EventPrice}/-</p>
      </div>
    </div>
  );
};

export default EventsComp;
