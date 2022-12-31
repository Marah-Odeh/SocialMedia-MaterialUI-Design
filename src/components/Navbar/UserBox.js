import React from "react";
import { styled, Avatar, Typography } from "@mui/material";

const UserBox = ({setOpenMenu, openMenu}) => {
  const StyledUserBox = styled("div")(({ theme }) => ({
    display: "flex",
    gap: 10,
   [theme.breakpoints.up("sm")]:{
    display:"none"
   }
  }));
  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: "28px",
    height: "28px",
  }));
  return (
    <StyledUserBox onClick={(e)=>{setOpenMenu(true)}}>
      <StyledAvatar alt="avatar" src="/static/images/avatar/13.jpg" />
      <Typography>Anne</Typography>
    </StyledUserBox>
  );
};

export default UserBox;
