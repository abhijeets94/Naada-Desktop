import React from "react";
import "./merchComp.css";

const MerchComp = (props) => {
  return (
    <div className="merchComponent">
      <div className="imageMerch">
        <img src={props.imgURL} alt='' />
      </div>
      <div className="merchName">
        <p>{props.merchName}</p>
      </div>
      <div className="merchPrice">
        <p>${props.merchPrice}/-</p>
      </div>
    </div>
  );
};

export default MerchComp;
