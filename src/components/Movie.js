import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultPoster from '../static/no-image.png';

const StyledMovie = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 300px;

    & b {
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.8rem;
        text-align: center;
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    & img {
        height: 420px;
        max-height: 420px;
    }

    & span{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.3rem;
        text-align: center;
        display: inline-block;
        margin-top: 0.3rem;
    }
`;

function Movie({
  className, title, poster, year,
}) {
  return (
    <StyledMovie className={className}>
      <b>{title}</b>
      <img src={poster === 'N/A' ? defaultPoster : poster} alt={title} />
      <span>{`(${year})`}</span>
    </StyledMovie>
  );
}

Movie.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

Movie.defaultProps = {
  className: '',
};

export default Movie;
