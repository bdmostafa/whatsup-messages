import React, { useState } from "react";
import "./Sidebar.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChatUsers from "../SidebarChatUsers/SidebarChatUsers";
import SidebarChatGroups from "../SidebarChatGroups/SidebarChatGroups";
import AddIcon from '@material-ui/icons/Add';
import CreateGroup from "../CreateGroup/CreateGroup";

const Sidebar = () => {

  const [usersTab, setUsersTab] = useState(true);
  const [groupsTab, setGroupsTab] = useState(false);

  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
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
        <IconButton
          className={usersTab && "active"}
          onClick={() => {
            setUsersTab(!usersTab);
            setGroupsTab(!groupsTab);
          }}
        >
          <PermIdentityIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setUsersTab(!usersTab);
            setGroupsTab(!groupsTab);
          }}
        >
          <SupervisorAccountIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
      {usersTab && (
        <div className="sidebar__chatUsers">
          <SidebarChatUsers />
          <SidebarChatUsers />
          <SidebarChatUsers />
        </div>
      )}

      {groupsTab && (
        <div className="sidebar__chatGroups">
          <SidebarChatGroups />
          <SidebarChatGroups />
          <SidebarChatGroups />
          <div className="sidebar__chatGroupsBtn">
            <button onClick={openModal}>
              <AddIcon />
              Create Group
            </button>
          </div>
        </div>
      )}
      <CreateGroup 
      modalIsOpen={modalIsOpen}
       afterOpenModal={afterOpenModal}
       closeModal={closeModal}
       />
    </div>
  );
};

export default Sidebar;
