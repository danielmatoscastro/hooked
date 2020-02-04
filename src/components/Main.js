import React, { useState } from 'react';
import styled from 'styled-components';

import Search from './Search';
import MovieList from './MovieList';

const StyledMain = styled.main`
    margin-bottom: 3rem;

    & .main-subtitle{
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: lighter;
      text-align: center;
      margin-top: 0.5rem;
    }
`;

function Main() {
  const [searchFor, setSearchFor] = useState('');
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    const URL = `https://www.omdbapi.com/?s=${searchFor}&apikey=ffe28c08`;
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setMovies(response.Search ? response.Search : []))
      .catch(() => setMovies([]));
  }

  function onChangeHandler(e) {
    setSearchFor(e.target.value);
  }

  function onKeyUpHandler(e) {
    if (e.key === 'Enter') {
      fetchMovies();
    }
  }

  return (
    <StyledMain>
      <Search onChange={onChangeHandler} onKeyUp={onKeyUpHandler} onClick={fetchMovies} />
      <h2 className="main-subtitle">Sharing a few of our favourite movies</h2>
      <MovieList movies={movies} />
    </StyledMain>
  );
}

export default Main;
