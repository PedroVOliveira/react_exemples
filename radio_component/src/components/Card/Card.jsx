import React from 'react';
import styled from 'styled-components';
import { base } from './styled';

const Wrapper = styled.div`
  ${base}
`;

const Card = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Card;
