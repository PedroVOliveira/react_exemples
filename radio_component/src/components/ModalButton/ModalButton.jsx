import React from 'react';
import styled from 'styled-components';
import {Container,GridContainer} from '../GlobalStyles/GlobalStyles';
import Icon from '../Icon/';
import {base} from './styled';

const Wrapper = styled.div`
  ${base}
`;

const ModalButton = () => {
  return (
    <Wrapper>
      <Icon icon="remove" color="#72bf44" size={22}/>
      <span>1</span>
      <Icon icon="add" color="#72bf44" size={22}/>
    </Wrapper>
  );
}

export default ModalButton;
