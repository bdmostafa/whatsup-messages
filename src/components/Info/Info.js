import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import './Info.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { UserContext } from '../../App';

const Info = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="info">
           <div className="info__header">
               <Avatar src={loggedInUser.photoURL} />
    <h4>{loggedInUser.name}</h4>
               <h6>Co-Worker</h6>
               <p>Dhaka, Bangladesh</p>
           </div>
           <button>More Information</button>

           <div className="info__contact">
               <div className="info__contactHeading">
                   <h2>Contact Information</h2>
                   <p>Add New</p>
               </div>
               <ul>
                   <li>
                    <MailOutlineIcon />
                    {loggedInUser.email}
                   </li>
                   <li>
                       <CallIcon />
                       +88 0545454545
                   </li>
                   <li>
                       <PermIdentityIcon />
                       ansnjya.sergil1
                   </li>
               </ul>
           </div>

           <div className="info__attachments">
               <div className="info__attachmentsHeading">
                   <h2>Attachments (104) </h2>
                   <p>View All</p>
               </div>
               <div className="info__attachmentsGallery">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg/598px-African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg/598px-African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg/598px-African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg/598px-African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg/598px-African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg/598px-African-Woman-Business-Woman-Young-Woman-Black-Woman-3439224.jpg" />
               </div>

           </div>
        </div>
    );
};

export default Info;