import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AvatarMenu from "./AvatarMenu";
import IconsBar from "./IconsBar";
import SearchBar from "./SearchBar";
import UserBox from "./UserBox";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const TypographyStyling = {
    display: { xs: "none", sm: "block" },
  };
  const ToolbarStyling = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={ToolbarStyling}>
        <Typography variant="h6" sx={TypographyStyling}>
          LAMA DEV
        </Typography>
        <SearchBar />
        <IconsBar setOpenMenu={setOpenMenu} />
        <UserBox setOpenMenu={setOpenMenu} />
        <AvatarMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
