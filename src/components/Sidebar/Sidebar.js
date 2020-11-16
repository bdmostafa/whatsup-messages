import React from "react";
import "./Sidebar.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChatUsers from "../SidebarChatUsers/SidebarChatUsers";

const Sidebar = () => {
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
          <SupervisorAccountIcon />
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
