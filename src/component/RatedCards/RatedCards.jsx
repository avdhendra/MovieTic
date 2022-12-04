import { Box, Typography } from "@mui/material";
import React from "react";
import Movie from "../Movie/Movie";
import { Container } from "./RatedCards.style";

const RatedCards = ({title,data}) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Container>
        {data?.results.map((movie, idx) => (
          <Movie key={movie.id} movie={movie} idx={idx} />
        ))}
      </Container>
    </Box>
  );
};

export default RatedCards;
