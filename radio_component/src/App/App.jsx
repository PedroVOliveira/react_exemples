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
  const [shoppingCart,setShoppingCart] = React.useState([]);
  React.useEffect(()=> {
    fetch('https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/products')
    .then((response) => response.json())
    .then((json) => setData(json));
  },[]);
  function handleClickAdd(id) {
    let qtd = 1;
    const findItemInData = data.find((product)=> product.id === id);
    // console.log(findItemInData.item.price.to.integers);
    let price = `${findItemInData.price.to.integers},${findItemInData.price.to.decimals}`;
    let price3 = parseFloat(price.replace(/\./g, '').replace(',', '.'));
    console.log(price3);
    console.log(Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2}).format(price3));
    const shoppingCartExist = shoppingCart.map((product)=>product.item.id).includes(id);

    if(shoppingCartExist) {
      let newShoppingCart = shoppingCart.map((product)=>{
        if(product.item.id === id) {
          product.quantity = product.quantity + 1;
          price3 = price3 * product.quantity;
          product.price = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2}).format(price3);
        }
        return product;
      })
      setShoppingCart(newShoppingCart);
    } else {
      setShoppingCart([...shoppingCart,{item:findItemInData,quantity:qtd,price,}])
    }
  }
  console.log(shoppingCart);
  return (
    <>
      <Notification />
      <Container>
        <GridContainer>
        {data && data.map((item)=> (
          <Card key={item.id}>
            <img src={item.picture} alt="image"/>
            <OferAlert>26%</OferAlert>
            <h3>Descrição do produto, com o máximo de duas linhas.</h3>
            <button onClick={()=>handleClickAdd(item.id)}>Adicionar</button>
          </Card>
        ))}
        </GridContainer>
        <ModalImage />
        <ModalProductTitle>Teste</ModalProductTitle>
        {/* <ModalButton onClickAdd={handleClickAdd}/> */}
        <button>Remover</button>

      </Container>
    </>
  );
}

export default App;
