import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChatUsers.css';

const SidebarChatUsers = () => {
    return (
        <div className="sidebarChatUsers">
            <Avatar />
            <div className="sidebarChatUsers__info">
                <h4>Annayna Sergill</h4>
                <p>Thanks for the update...</p>
            </div>
        </div>
    );
};

export default SidebarChatUsers;