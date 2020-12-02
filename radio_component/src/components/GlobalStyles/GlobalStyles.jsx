import styled from 'styled-components';

export const Container = styled.div`
  width:90vw;
  margin:0 auto;

  h3 {
    font-size:1.0rem;
  }
`;

export const GridContainer = styled.div`
  display:grid;
  grid-template-columns:50% 1fr;

  img {
    width:100%;
  }

  h3 {
    max-width:80%;
    font-size:0.8rem;
  }

  @media(min-width:700px) {
    grid-template-columns:10% 100%;
  }
`;
