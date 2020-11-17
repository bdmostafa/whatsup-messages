import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChatGroups.css';

const SidebarChatGroups = () => {
    return (
        <div className="sidebarChatGroups">
            <Avatar />
            <div className="sidebarChatGroups__info">
                <h4>MERN Group</h4>
                <p>Thanks for the update...</p>
            </div>
        </div>
    );
};

export default SidebarChatGroups;