import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import AttachFileRoundedIcon from "@material-ui/icons/AttachFileRounded";
import Chat from "./Chat";


const Chats = ({ messages, loggedInUser }) => {
  
  const [inputVal, setInputVal] = useState("");

  const sendMsg =  (e) => {
    e.preventDefault();

     fetch("http://localhost:4200/messages/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: inputVal,
        name: "Mostafa",
        timestamp: new Date().toUTCString(),
        received: false,
      }),
    });

    setInputVal("");

  };
console.log(loggedInUser)
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={loggedInUser && loggedInUser.photoURL} />

        <div className="chat__headerInfo">
          <h4>{loggedInUser.name}</h4>
          <p>Online</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((msg, idx) => (
          <Chat key={idx} message={msg} name={loggedInUser.name} image={loggedInUser.photoURL} />
        ))}
      </div>

      <div className="chat__footer">
        <form>
          <input
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Enter a message"
            type="text"
            defaultValue={inputVal}
          />
          <div className="chat__footerSend">
            <MicNoneIcon />
            <InsertEmoticonIcon />
            <AttachFileRoundedIcon />
            <button onClick={sendMsg} type="submit">
              {" "}
              <SendRoundedIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chats;
