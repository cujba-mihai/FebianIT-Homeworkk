import React from 'react';
import styled from '@emotion/styled';
import SearchBar from './partials/SearchBar';

const Wrapper = styled.div`
  padding: 1rem;
  margin: -8px -8px 0 -8px;
  background-color: #adade8;
`;

function NavBar() {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
}

export default NavBar;
