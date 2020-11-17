import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './SidebarChatUsers.css';

const SidebarChatUsers = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="sidebarChatUsers">
            <Avatar src={loggedInUser.photoURL}/>
            <div className="sidebarChatUsers__info">
              <h4>{loggedInUser.name}</h4>
                <p>Thanks for the update...</p>
            </div>
        </div>
    );
};

export default SidebarChatUsers;