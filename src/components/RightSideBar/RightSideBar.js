import { Box, Typography } from "@mui/material";
import React from "react";
import AvatarGroupComponent from "./AvatarGroupComponent";
import ConversationContainer from "./ConversationContainer";
import ImageListContainer from "./ImageListContainer";

const RightSideBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
     <Box position="fixed" paddingRight={"3%"}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroupComponent />
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageListContainer />
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <ConversationContainer/>
      </Box>
    </Box>
  );
};

export default RightSideBar;
