import React, { useEffect, useState, useContext } from "react";
import LeftSidebarIcon from "../LeftSidebarIcon/LeftSidebarIcon";
import Pusher from "pusher-js";
import Sidebar from "../Sidebar/Sidebar";
import Chats from "../Chat/Chats";
import Info from "../Info/Info";
import { UserContext } from "../../App";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/messages/sync")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

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
    };
  }, [messages]);

  return (
    <>
      <LeftSidebarIcon />
      <Sidebar />
      <Chats loggedInUser={loggedInUser} messages={messages} />
      <Info loggedInUser={loggedInUser} />
    </>
  );
};

export default Home;
