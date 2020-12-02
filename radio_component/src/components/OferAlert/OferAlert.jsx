import React from 'react';
import styled from 'styled-components';
import { base } from './styled';

const Wrapper = styled.div`
  ${base}
`;

const OferAlert = ({children}) => {
  return (
    <Wrapper>
      <span>OFERTAS: </span>
      {children}
    </Wrapper>
  );
}

export default OferAlert;
