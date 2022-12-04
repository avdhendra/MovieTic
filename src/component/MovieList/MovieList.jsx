import React from 'react';
import Movie from '../Movie/Movie';
import { MovieContainer } from './MovieList.style';

const MovieList = ({ movies,numberOfMovies ,first}) => {
 
 const startFrom=first?1:0
  return (
    <div>
      <MovieContainer container>
        {movies.results.slice(startFrom,numberOfMovies).map((movie, idx) => (
          <Movie key={idx} movie={movie} idx={idx} />
        ))}
      </MovieContainer>
    </div>
  );
};

export default MovieList;
