import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #2C2E37;
    padding: 0.8rem 0;

    & h1{
        color: #FFF;
        font-family: 'Fira Sans', sans-serif;
        text-align: center;
        font-size: 3rem;
        margin: 0;
    }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Hooked</h1>
    </StyledHeader>
  );
}

export default Header;
