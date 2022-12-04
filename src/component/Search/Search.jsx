import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, CssTextField } from "./Search.style";
import { Search as SearchIcon } from "@mui/icons-material";
import { searchMovie } from "../../Features/categorySlice";

import { useLocation } from "react-router-dom";
const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };
  if (location.pathname !== "/") return null;
  return (
    <Container>
      <CssTextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Search;
