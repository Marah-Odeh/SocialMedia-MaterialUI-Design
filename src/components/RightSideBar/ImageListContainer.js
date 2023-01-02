import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { ImageListDetails } from "./ImagesListDetails";
const ImageListContainer = () => {
  return (
    <ImageList cols={3} rowHeight={100} gap={5}>
      {ImageListDetails.map((item, index) => {
        const { imgSrc } = item;
        return (
          <ImageListItem key={index}>
            <img src={imgSrc} alt="" />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default ImageListContainer;
