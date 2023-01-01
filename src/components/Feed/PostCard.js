import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Posts } from "./PostDetails";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const PostCard = () => {
  return (
    <>
      {Posts.map((item, index) => {
        const { title, subheader, image, text } = item;
        return (
          <Card key={index} sx={{ margin: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                 {title[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={title}
              subheader={subheader}
            />
            <CardMedia
              component="img"
              height="20%"
              image={image}
              alt="Post image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
