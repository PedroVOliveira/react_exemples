import React from 'react';
import styled from 'styled-components';
import {Container,GridContainer} from '../GlobalStyles/GlobalStyles';
import {base} from './styled';

import Icon from '../Icon';
const Menssage = styled.div`
  ${base}
`;

const Notification = ({children}) => {
  return (
    <Menssage>
      <Container>
        <span>Item Adicionado no carrinho com sucesso</span>
        <Icon icon="clear" />
      </Container>
    </Menssage>
  );
}

export default Notification;
