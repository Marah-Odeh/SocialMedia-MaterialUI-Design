import { InputBase, styled } from "@mui/material";
import React from "react";

const SearchBar = () => {
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    width: "40%",
    borderRadius:theme.shape.borderRadius,
    padding:"0 10px"
  }));
  

  return <Search><InputBase placeholder="search..."/></Search>;
};

export default SearchBar;
