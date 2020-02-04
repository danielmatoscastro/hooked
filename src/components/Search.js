import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0;

    & input {
        display: inline-block;
        margin-left: 5rem;
        margin-right: 5px;
        width: 30rem;
        height: 1.5rem;
        border: 2px solid #ccc;
        border-radius: 2px;
        padding-left: 1rem;
    }

    & input:focus, & button:focus{
        outline: 0px;
    }

    & button {
        border: 2px solid #555;
        background-color: #fff;
        border-radius: 2px;
        transition: background-color 0.15s ease-in-out;
    }

    & button:active{
        background-color: #ccc;
    }
`;

function Search() {
  return (
    <StyledSearch>
      <input />
      <button type="button">SEARCH</button>
    </StyledSearch>
  );
}

export default Search;
