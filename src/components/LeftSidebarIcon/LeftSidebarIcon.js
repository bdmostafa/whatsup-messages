import React from "react";
import "./LeftSidebarIcon.css";
// import SvgIcon from '@material-ui/core/SvgIcon';
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded";
import { IconButton } from "@material-ui/core";

const LeftSidebarIcon = () => {
  return (
    <div className="left__sidebarIcons">
      <IconButton>
        <SmsRoundedIcon />
      </IconButton>
      <IconButton>
        <PermIdentityRoundedIcon />
      </IconButton>
      <IconButton>
        <StarBorderRoundedIcon />
      </IconButton>
      <IconButton>
        <EventAvailableRoundedIcon />
      </IconButton>
    </div>
  );
};

export default LeftSidebarIcon;
