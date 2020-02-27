import React from 'react';
import { Provider } from './context/OrderContext';
import EnterYourDetails from './components/EnterYourDetails';
import ChooseYourPizza from './components/ChooseYourPizza';
import OrderSummary from './components/OrderSummary';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 20px 30px;
`;

const PlaceOrderButton = styled.button`
  border: 0;
  outline: 0;
  background: lightgray;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  color: white;
  &:hover {
    background: gray;
  }
`;

function App() {
  return (
    <Provider>
      <Layout>
        <EnterYourDetails />
        <ChooseYourPizza />
        <OrderSummary />
        <PlaceOrderButton>Place order</PlaceOrderButton>
      </Layout>
    </Provider>
  );
}

export default App;
