import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { DateRange } from "@mui/icons-material";
const PostButton = () => {
  return (
    <ButtonGroup
      sx={{ marginTop: "16px" }}
      fullWidth
      variant="contained"
      aria-label="outlined primary button group"
    >
      <Button>Post</Button>
      <Button sx={{ width: "100px" }}>
        <DateRange />
      </Button>
    </ButtonGroup>
  );
};

export default PostButton;
