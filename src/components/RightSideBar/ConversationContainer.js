import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { ConversationDetails } from "./ConversationDetails";
const ConversationContainer = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {ConversationDetails.map((item, index) => {
        const { alt, src, primaryText, to, description } = item;
        return (
          <>
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={alt} src={src} />
              </ListItemAvatar>
              <ListItemText
                primary={primaryText}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {to}
                    </Typography>
                    {description}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
};

export default ConversationContainer;
