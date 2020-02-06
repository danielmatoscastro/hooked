import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Movie from './Movie';

const StyledMovieList = styled.ul`
    max-width: 80%;
    margin: 0.5rem auto 0;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;

    & .movie-list-movie {
        margin-top: 2.5rem;
        margin-right: 2rem;
    }
`;

function MovieList({ movies }) {
  const uniqueMovies = [];
  movies.forEach((movie) => {
    const containID = uniqueMovies
      .reduce((contain, current) => (contain || current.imdbID === movie.imdbID), false);

    if (!containID) {
      uniqueMovies.push(movie);
    }
  });

  const movieList = uniqueMovies.map((movie) => (
    <Movie
      className="movie-list-movie"
      key={movie.imdbID}
      title={movie.Title}
      poster={movie.Poster}
      year={movie.Year}
    />
  ));

  return (
    <StyledMovieList>
      {movieList}
    </StyledMovieList>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
