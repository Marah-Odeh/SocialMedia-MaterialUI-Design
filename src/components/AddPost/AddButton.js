import { Fab, Tooltip,styled } from "@mui/material";
import React from "react";
import { Add } from "@mui/icons-material";
const AddButton = ({handleOpen}) => {
  const StyledTooltip = styled(Tooltip)(({ theme }) => ({
    position:"fixed",
    bottom: 20,
    left: "calc(50% - 25px)",
    [theme.breakpoints.up("sm")]: { left:30},

  }));
  return (
    <StyledTooltip onClick={handleOpen}>
      <Fab size="large" color="primary" aria-label="add">
        <Add />
      </Fab>
    </StyledTooltip>
  );
};

export default AddButton;
