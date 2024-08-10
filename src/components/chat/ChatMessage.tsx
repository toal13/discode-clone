import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Toal
          <span className="messageTimeStamp">2024/08/10</span>
        </h4>
        <p>Message</p>
      </div>
    </div>
  );
};

export default ChatMessage;
