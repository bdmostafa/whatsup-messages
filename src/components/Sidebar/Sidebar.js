import React, { useState } from "react";
import "./Sidebar.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Modal from 'react-modal';
import ChatUser from "../ChatUsers/ChatUser";
import SidebarChatUsers from "../SidebarChatUsers/SidebarChatUsers";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const Sidebar = () => {

  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="sidebar">
      <h2>Messages</h2>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="search" placeholder="Search people or messages" />
        </div>
      </div>
      <div className="sidebar__headerIcon">
        <IconButton>
          <PermIdentityIcon />
        </IconButton>
        <IconButton>
          <div onClick={openModal} className="btn">
            <SupervisorAccountIcon />
          </div>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="model">
            <h2 className="text-center">Create a Group</h2>
            <form>
              <input className="form-control" placeholder="Search for people" />
            </form>
            <ChatUser></ChatUser>
            <ChatUser></ChatUser>
            <ChatUser></ChatUser>
            <ChatUser></ChatUser>
          </div>
        </Modal>
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="sidebar__chatUsers">
          <SidebarChatUsers />
          <SidebarChatUsers />
          <SidebarChatUsers />
      </div>
    </div>
  );
};

export default Sidebar;
