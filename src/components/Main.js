import React from 'react';
import styled from 'styled-components';

import Search from './Search';

const StyledMain = styled.main`
    /* background-color: orange; */
    height: 10rem;
`;

function Main() {
  return (
    <StyledMain>
      <Search />
    </StyledMain>
  );
}

export default Main;
