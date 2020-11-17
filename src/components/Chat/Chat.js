import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";

const Chat = ({ message: { name, message, timestamp, received } }) => {
  return (
    <div className={`chat__msgArea ${received && "chat__reciever"}`}>
      <Avatar />
      <div style={{ display: "inline-grid" }}>
        <p className="chat__msg">
          <span className="chat__name">{name}</span>
          {message}
        </p>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </div>
  );
};

export default Chat;
