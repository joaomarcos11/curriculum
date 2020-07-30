import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
`;

// cada Main vai usar PageDefault usando props
function PageDefault({ children }) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default PageDefault;
