import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../Section/Section';
import { Context as OrderContext } from '../../context/OrderContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
  margin: 0;
  padding: 20px 0;
`;

const PizzaContainer = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray
`;

const PizzaTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: gray;
`;

const PizzaContent = styled.div`
  margin: 3px;
  display: flex;
  align-items: center;
`;

const Topping = styled.p`
  margin: 3px;
  margin-left: 10px;
  font-size: 16px;
  color: rgba(0,0,0,0.7);
`;

function OrderSummary() {
  const { state, getOrder } = useContext(OrderContext)

  useEffect(() => {
    getOrder();
  }, [])

  console.log(state);

  return (
    < Layout >
      <Section
        title='Order Summary'
      >
        {state.map(pizza => (
          <PizzaContainer>
            <PizzaTitle>{pizza.size} Pizza</PizzaTitle>
            {pizza.toppings.map(topping => (
              <PizzaContent>
                <FontAwesomeIcon icon={faPlus} size="xs" color='rgba(0,0,0,0.7)' />
                <Topping>{topping}</Topping>
              </PizzaContent>
            ))}
          </PizzaContainer>
        ))}
      </Section>
    </Layout >
  )
}

export default OrderSummary;