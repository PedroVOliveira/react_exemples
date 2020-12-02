import React from 'react';
import Card from '../components/Card';
import OferAlert from '../components/OferAlert';
import {Container,GridContainer} from '../components/GlobalStyles/GlobalStyles';
const App = () => {
  const [data,setData] = React.useState(null);
  React.useEffect(()=> {
    fetch('https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/products')
    .then((response) => response.json())
    .then((json) => setData(json));
  },[])
  console.log(data);
  return (
    <Container>
      <GridContainer>
        <Card>
        <img src={data?.[4]?.picture} alt="image"/>
        <OferAlert>26%</OferAlert>
        Descrição do produto, com o máximo de duas linhas.
      </Card>
      <Card>
        <img src={data?.[4]?.picture} alt="image"/>
        <OferAlert>26%</OferAlert>
        Descrição do produto, com o máximo de duas linhas.
      </Card>
      </GridContainer>
    </Container>
  );
}

export default App;
