import { Box } from '@mui/material'
import React from 'react'
import PostCard from './PostCard'

const Feed = () => {
  return (
    <Box flex={3} p={2}>
      <PostCard/>
    </Box>
  )
}

export default Feed