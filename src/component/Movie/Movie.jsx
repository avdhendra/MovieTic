import { Box, Grid, Grow, Rating, Tooltip } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Img, Links, Title } from './Movie.style'

const Movie = ({movie,index}) => {
  const navigate=useNavigate()
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        p={"10px"}
        style={{ overflow: "hidden" }}
      >
        <Grow in key={index} timeout={(Number(index) + 1) * 250}>
          <Links onClick={() => navigate(`/movie/${movie.id}`)}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "20px",
                height: 300,
                marginBottom: "10px",
              }}
            >
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://fillmurray.com/200/300`
                }
                alt={movie.title}
                className="img"
              />
            </Box>
            <Title className="title" variant="h5">
              {movie.title}
            </Title>
            <Tooltip disableTouchListener title={`${movie.vote_average / 2}/5`}>
              <div>
                <Rating
                  readOnly
                  value={movie.vote_average / 2}
                  precision={0.1}
                />
              </div>
            </Tooltip>
          </Links>
        </Grow>
      </Grid>
    );
}

export default Movie