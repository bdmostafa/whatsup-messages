import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h4>Annayna Segtill</h4>
          <p>Online | Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <div className="chat__msgArea">
          <Avatar />
          <div style={{ display: "inline-grid" }}>
            <p className="chat__msg">
              <span className="chat__name">Mostafa</span>
              This is message
            </p>
            <p className="chat__timestamp">{new Date().toUTCString()}</p>
          </div>
        </div>

        <div className="chat__msgArea chat__reciever">
          <Avatar />
          <div style={{ display: "inline-grid" }}>
            <p className="chat__msg">
              <span className="chat__name">Mostafa</span>
              This is message
            </p>
            <p className="chat__timestamp">{new Date().toUTCString()}</p>
          </div>
        </div>

        <div className="chat__msgArea">
          <Avatar />
          <div style={{ display: "inline-grid" }}>
            <p className="chat__msg">
              <span className="chat__name">Mostafa</span>
              This is message
            </p>
            <p className="chat__timestamp">{new Date().toUTCString()}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;
