import { Box } from "@mui/material";
import React from "react";

const LeftSideBar = () => {
  return (
    <Box
      flex={1}
      p={2}
      bgcolor={"lightgreen"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      LeftSideBar
    </Box>
  );
};

export default LeftSideBar;
