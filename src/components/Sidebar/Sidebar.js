import React from "react";
import "./Sidebar.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Messages</h2>
      <div className="sidebar__search">
        <SearchIcon />
        <input type="search"/>
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
    </div>
  );
};

export default Sidebar;
