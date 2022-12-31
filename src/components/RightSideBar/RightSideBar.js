import { Box } from "@mui/material";
import React from "react";

const RightSideBar = () => {
  return (
    <Box
      flex={2}
      bgcolor={"lightblue"}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightSideBar
    </Box>
  );
};

export default RightSideBar;
