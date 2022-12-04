import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
 

} from "@mui/material";

import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Genres,
  searchTerm,
} from "../../Features/categorySlice";
import { useGetMoviesQuery } from "../../services/TMDB";
import FeatureMovie from "../FeatureMovie/FeatureMovie";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

function Movies() {
  const GenreName = useSelector(Genres);
 const [page, setPage] = useState(1);
  const search = useSelector(searchTerm);
  const { data, error, isFetching } = useGetMoviesQuery({
    GenreName,
  page,
    search,
  });
  const { id } = useParams();
const theme=useTheme()
  useEffect(() => {
    setPage(1)
  }, [id]);
  const lg = useMediaQuery(theme.breakpoints.only('lg'))
  const limit=lg?17:19
  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress size={"4em"} />
      </Box>
    );
  }

  if (data && !data.results.length) {
    return (
      <Box display={"flex"} alignItems={"center"} mt="20px">
        <Typography>
          No Movies that match that name
          <br />
          Please Search for something else
        </Typography>
      </Box>
    );
  }
  if (error) {
    return "An Error has Occured";
  }

  return (
    <div>
      <FeatureMovie movie={data.results[0]}/>
      <MovieList movies={data} numberOfMovies={limit} first />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
}

export default Movies;
