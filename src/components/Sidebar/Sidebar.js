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

const Sidebar = () => {
  const [usersTab, setUsersTab] = useState(true);
  const [groupsTab, setGroupsTab] = useState(false);

  console.log(usersTab, groupsTab);
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
            <button>
              <AddIcon />
              Create Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
