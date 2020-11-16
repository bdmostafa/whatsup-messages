import { Avatar } from '@material-ui/core';
import React from 'react';
import './Info.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Info = () => {
    return (
        <div className="info">
           <div className="info__header">
               <Avatar />
               <h4>Ananya Shergill</h4>
               <h6>Co-Worker</h6>
               <p>Dhaka, Bangladesh</p>
               <button>More Information</button>

           </div>

           <div className="info__contact">
               <div className="info__contactHeading">
                   <h2>Contact Information</h2>
                   <p>Add New</p>
               </div>
               <ul>
                   <li>
                    <MailOutlineIcon />
                    annanya.shergill@gms.com
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
                <img src="" />
               </div>

           </div>
        </div>
    );
};

export default Info;