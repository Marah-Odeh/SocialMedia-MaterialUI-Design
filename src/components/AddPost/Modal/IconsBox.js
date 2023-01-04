import { Stack } from "@mui/material";
import React from "react";
import {
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
const IconsBox = () => {
  return (
    <Stack direction="row" gap={1} mt={2} mb={3}>
      <EmojiEmotions color="primary" />
      <Image color="secondary" />
      <VideoCameraBack color="success" />
      <PersonAdd color="error" />
    </Stack>
  );
};

export default IconsBox;
