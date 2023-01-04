import { Stack, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

const ModalHeader = ({handleClose}) => {
  return (
    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"} paddingLeft={"30%"}>
          <Typography variant="h6" textAlign="center" color="gray">
            Create Post
          </Typography>
          <CloseIcon  onClick={handleClose} cursor={"pointer"}/>
        </Stack>
  )
}

export default ModalHeader