import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";

const Chat = ({ message: { name, message, timestamp, received } }) => {
  return (
<<<<<<< HEAD
    <div className={`chat__msgArea ${received && "chat__reciever"}`}>
      <Avatar />
      <div style={{ display: "inline-grid" }}>
        <p className="chat__msg">
          <span className="chat__name">{name}</span>
          {message}
        </p>
        <p className="chat__timestamp">{timestamp}</p>
=======
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
              This is messages
            </p>
            <p className="chat__timestamp">{new Date().toUTCString()}</p>
          </div>
        </div>
      </div>

      <div className="chat__footer">
        <form>
          <input placeholder="Enter a message" type="text" />
          <div className="chat__footerSend">
            <MicNoneIcon />
            <InsertEmoticonIcon />
            <AttachFileRoundedIcon />
            <button type="submit"> <SendRoundedIcon /></button>
          </div>
        </form>
>>>>>>> 106d21258f72a3b09f91f8fa15c522235c333ab5
      </div>
    </div>
  );
};

export default Chat;
