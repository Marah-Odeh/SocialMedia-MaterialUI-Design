import React from "react";
import { styled, Badge, Avatar } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

const IconsBar = ({setOpenMenu}) => {
  const Icons = styled("div")(({ theme }) => ({
    display: "none",
    gap: "20px",
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }));

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: "28px",
    height: "28px",
  }));
  return (
    <Icons>
      <Badge badgeContent={5} color="error">
        <Notifications />
      </Badge>
      <Badge badgeContent={2} color="error">
        <Mail />
      </Badge>
      <StyledAvatar alt="avatar" src="/static/images/avatar/13.jpg" onClick={(e)=>{setOpenMenu(true)}} />
    </Icons>
  );
};

export default IconsBar;
