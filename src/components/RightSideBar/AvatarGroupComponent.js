import React from "react";
import { AvatarGroup, Avatar } from "@mui/material";
import { AvatarGroupDetails } from "./AvatarGroupDetails";
const AvatarGroupComponent = () => {
  return (
    <AvatarGroup max={6} >
      {AvatarGroupDetails.map((item, index) => {
        const { altText, imgSrc } = item;
        return <Avatar key={index} alt={altText} src={imgSrc} />;
      })}
    </AvatarGroup>
  );
};

export default AvatarGroupComponent;
