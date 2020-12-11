import React from 'react';
import styled from 'styled-components';
import {Container,GridContainer} from '../GlobalStyles/GlobalStyles';
import {base} from './styled';

const ModalTitle = styled.h3`
  ${base}
`;

const ModalProductTitle = ({children}) => {
  return (
    <ModalTitle>{children}</ModalTitle>
  );
}

export default ModalProductTitle;
