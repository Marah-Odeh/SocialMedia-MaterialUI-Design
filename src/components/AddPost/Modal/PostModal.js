import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import IconsBox from "./IconsBox";
import ModalHeader from "./ModalHeader";
import PostButton from "./PostButton";

const PostModal = ({ handleClose, open }) => {
  const ModalStyling = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: "28px",
    height: "28px",
  }));

  return (
    <Modal
      sx={ModalStyling}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={400}
        height={280}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
        borderRadius={5}
      >
        <ModalHeader handleClose={handleClose} />
        <Stack flexDirection={"row"} gap={1.5} mb={3} alignItems={"center"}>
          <StyledAvatar alt="avatar" src="/static/images/avatar/13.jpg" />
          <Typography fontWeight={500} variant="span">
            Anne
          </Typography>
        </Stack>
        <TextField
          sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <IconsBox />
        <PostButton />
      </Box>
    </Modal>
  );
};

export default PostModal;
