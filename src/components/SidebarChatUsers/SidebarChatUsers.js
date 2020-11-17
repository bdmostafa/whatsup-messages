import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './SidebarChatUsers.css';

const SidebarChatUsers = () => {
    const { loggedInUser: {name, photoURL} } = useContext(UserContext);


    return (
        <div className="sidebarChatUsers">
            <Avatar src={photoURL} />
            <div className="sidebarChatUsers__info">
                <h4>{name}</h4>
                <p>Thanks for the update...</p>
            </div>
        </div>
    );
};

export default SidebarChatUsers;