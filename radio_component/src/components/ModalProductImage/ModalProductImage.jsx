import React from 'react';
import styled from 'styled-components';
import {Container,GridContainer} from '../GlobalStyles/GlobalStyles';
import {base} from './styled';

const ModalImage = styled.img`
  ${base}
`;

const ModalProductImage = () => {
  return (
    <ModalImage src="https://cdn.leroymerlin.com.br/products/cooktop_a_gas_bivolt_fischer_2_bocas_7726_89585230_e282_300x300.jpg" alt="image"/>
  );
}

export default ModalProductImage;
