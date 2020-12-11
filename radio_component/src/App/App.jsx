import React from 'react';
import Card from '../components/Card';
import OferAlert from '../components/OferAlert';
import {Container,GridContainer} from '../components/GlobalStyles/GlobalStyles';
import Notification from '../components/Notification';
import ModalImage from '../components/ModalProductImage';
import ModalProductTitle from '../components/ModalProductName';
import ModalButton from '../components/ModalButton';
const App = () => {
  const [data,setData] = React.useState(null);
  React.useEffect(()=> {
    fetch('https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/products')
    .then((response) => response.json())
    .then((json) => setData(json));
  },[]);

  return (
    <>
      <Notification />
      <Container>
        <GridContainer>
          <Card>
          <img src={data?.[4]?.picture} alt="image"/>
          <OferAlert>26%</OferAlert>
          <h3>Descrição do produto, com o máximo de duas linhas.</h3>
        </Card>
        <Card>
          <img src={data?.[4]?.picture} alt="image"/>
          <OferAlert>26%</OferAlert>
          <h3>{data?.[4]?.name}</h3>
        </Card>
        </GridContainer>
        <ModalImage />
        <ModalProductTitle>Teste</ModalProductTitle>
        <ModalButton />
      </Container>
    </>
  );
}

export default App;
