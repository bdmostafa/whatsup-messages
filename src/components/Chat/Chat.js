import { Avatar, IconButton } from "@material-ui/core";
import React, { useContext } from "react";
import "./Chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import { UserContext } from "../../App";

const Chat = () => {
  const [loggedInUser,setLoggedInUser]= useContext(UserContext)
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={loggedInUser.photoURL} />

        <div className="chat__headerInfo">
  <h4>{loggedInUser.name}</h4>
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
              <span className="chat__name">{loggedInUser.name}</span>
              This is message
            </p>
            <p className="chat__timestamp">{new Date().toUTCString()}</p>
          </div>
        </div>

        <div className="chat__msgArea chat__reciever">
          <Avatar />
          <div style={{ display: "inline-grid" }}>
            <p className="chat__msg">
              <span className="chat__name">{loggedInUser.name}</span>
              This is message
            </p>
            <p className="chat__timestamp">{new Date().toUTCString()}</p>
          </div>
        </div>

        <div className="chat__msgArea">
          <Avatar />
          <div style={{ display: "inline-grid" }}>
            <p className="chat__msg">
  <span className="chat__name">{loggedInUser.name}</span>
              This is message
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
      </div>
    </div>
  );
};

export default Chat;
