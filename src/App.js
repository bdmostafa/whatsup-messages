import React, { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Info from "./components/Info/Info";
import LeftSidebarIcon from "./components/LeftSidebarIcon/LeftSidebarIcon";
import Sidebar from "./components/Sidebar/Sidebar";
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    const pusher = new Pusher("6fba44253488d9d7fcc8", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__body">
        <LeftSidebarIcon />
        <Sidebar />
        <Chat />
        <Info />
      </div>
    </div>
  );
}

export default App;
