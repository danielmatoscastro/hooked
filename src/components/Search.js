import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

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

const StyledMdSearch = styled(MdSearch)`
  font-size: 1rem;
`;

function Search({ onChange, onKeyUp, onClick }) {
  return (
    <StyledSearch>
      <input placeholder="Type here 😎" onChange={onChange} onKeyUp={onKeyUp} />
      <button type="button" aria-label="Search" onClick={onClick}><StyledMdSearch /></button>
    </StyledSearch>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Search;
