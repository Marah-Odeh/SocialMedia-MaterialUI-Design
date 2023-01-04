import React,{useState} from "react";
import Feed from "../components/Feed/Feed";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import Navbar from "../components/Navbar/Navbar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import AddPost from "../components/AddPost/AddPost";
const HomePage = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftSideBar setMode={setMode}  mode={mode}/>
        <Feed />
        <RightSideBar />
      </Stack>
      <AddPost />
    </Box>
    </ThemeProvider>
  );
};

export default HomePage;
