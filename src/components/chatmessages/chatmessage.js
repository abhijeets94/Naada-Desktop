import React from "react";
import "./chatmesage.css";
const ChatMessageComponent = (props) => {
  return (
    <div className="chatmessagecomponentcontainer">
      <div>
        {props.messages.map((onemessage) => (
          <div>
            <small>{props.user}</small>
            <h1 className="onemessage">{onemessage}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChatMessageComponent;
