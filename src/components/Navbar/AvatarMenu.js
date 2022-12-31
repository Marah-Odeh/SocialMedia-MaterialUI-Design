import { Menu, MenuItem } from "@mui/material";
import React from "react";

const AvatarMenu = ({ setOpenMenu, openMenu }) => {
  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      open={openMenu}
      onClose={(e) => setOpenMenu(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};

export default AvatarMenu;
