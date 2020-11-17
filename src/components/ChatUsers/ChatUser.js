import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import '../SidebarChatUsers/SidebarChatUsers.css'

const ChatUser = () => {
    return (
        <div className="sidebarChatUsers">
            <Avatar />
            <div className="sidebarChatUsers__info mt_3">
                <h4>Annayna Sergill</h4>
            </div>
            <div className="add-btn">
                <Button variant="contained" color="primary">
                    Add
                </Button>
            </div>
        </div>
    );
};

export default ChatUser;