import {
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { GenreImg, LinkContainer, StyledLink } from "./Sidebar.styles";
import { ReactComponent as MovieTicRed } from "../../assest/movietic-red.svg";
import { ReactComponent as MovieTicBlack } from "../../assest/movietic-black.svg";
import genresIcons from "../../assest/genre";
import { useGetGenresQuery } from "../../services/TMDB";
import { useDispatch, useSelector } from "react-redux";
import { category, selectGenres, Genres } from "../../Features/categorySlice";
const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const getCategories = useSelector(category);
  const categoryId = useSelector(Genres);
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  console.log(getCategories);

  useEffect(() => {
  setMobileOpen(false)
},[setMobileOpen,categoryId])


  const clickHandler = (heading, label, id) => {
    navigate("/");
    dispatch(selectGenres(id));
  };
  
  return (
    <div>
      <LinkContainer onClick={()=>{navigate('/')}}>
        {theme.palette.mode === "light" ? <MovieTicBlack /> : <MovieTicRed />}
      </LinkContainer>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {getCategories?.map(({ label, value }) => (
          <StyledLink
            key={value}
            onClick={() => {
              clickHandler("categories", label, value);
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GenreImg src={genresIcons[label.toLowerCase()]} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </StyledLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display={"flex"} justifyContent={"center"}>
            <CircularProgress />
          </Box>
        ) : (
          data.genres?.map(({ name, id }) => (
            <StyledLink
              onClick={() => clickHandler("genre", name, id)}
              key={name}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GenreImg src={genresIcons[name.toLowerCase()]} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </StyledLink>
          ))
        )}
      </List>
    </div>
  );
};

export default Sidebar;
