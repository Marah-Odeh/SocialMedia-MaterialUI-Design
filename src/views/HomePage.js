import React from "react";
import Feed from "../components/Feed/Feed";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import Navbar from "../components/Navbar/Navbar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import { Box, Stack } from "@mui/material";
const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </Stack>
    </Box>
  );
};

export default HomePage;
