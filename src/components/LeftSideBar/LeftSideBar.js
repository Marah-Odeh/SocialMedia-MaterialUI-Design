import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { ListDetails } from "./ListDetails";

const LeftSideBar = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {ListDetails.map((item, index) => {
            const { hrefTag, icon, text } = item;
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={hrefTag}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  {text !== "mode" ? (
                    <ListItemText primary={text} />
                  ) : (
                    <Switch
                      onChange={(e) =>
                        setMode(mode === "light" ? "dark" : "light")
                      }
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
