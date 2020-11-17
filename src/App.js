import React, { useEffect, useState } from "react";
import "./App.css";
import Chats from "./components/Chat/Chats";
import Info from "./components/Info/Info";
import Sidebar from "./components/Sidebar/Sidebar";
import LeftSidebarIcon from "./components/LeftSidebarIcon/LeftSidebarIcon";
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4200/messages/sync')
    .then(res => res.json())
    .then(data => setMessages(data))
  }, [])

  useEffect(() => {
    const pusher = new Pusher("6fba44253488d9d7fcc8", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMsg) => {
      // alert(JSON.stringify(newMsg));
      setMessages([...messages, newMsg]);
    });

    // When one msg is updated/sent, execute unbind all and unsubscribe
    // because any other users' msg should not be executed at a time
    // ensure there is only one subscriber
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  return (
    <div className="App">
      <div className="app__body">
        <LeftSidebarIcon />
        <Sidebar />
        <Chats messages={messages} />
        <Info />
      </div>
    </div>
  );
}

export default App;
