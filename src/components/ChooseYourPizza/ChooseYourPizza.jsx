import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../Section/Section';
import Size from './components/Size/Size';
import Topping from './components/Topping/Topping';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TOPPINGS = [
  'Anchovy', 'Bacon', 'Basil', 'Chili',
  'Mozzarella', 'Mushroom', 'Olive', 'Onion',
  'Pepper', 'Pepperoni', 'Sweetcorn', 'Tomato'
]

const Layout = styled.div`
  padding: 20px 30px;
`;

const Toggle = styled.button`
  margin: 0;
  border: none;
  outline: none;
  background: #fff;
`;

const Title = styled.h3`
  color: #6E7790;
`;

const SizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SizeItem = styled.div`
  margin: 20px 0;
  width: calc(100% / 3 - 20px);
`;

const ToppingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ToppingItem = styled.div`
  margin: 10px 0;
  width: calc(100% / 4 - 10px);
`;

function ChooseYourPizza() {
  const [expand, setExpand] = useState(true);
  const [icon, setIcon] = useState(faAngleUp);

  const toggleSection = () => {
    setExpand(!expand);
    expand ? setIcon(faAngleDown) : setIcon(faAngleUp);
  }

  return (
    < Layout >
      <Section
        title="Choose your pizzas"
      >
        <Title>Select the size</Title>
        <Toggle onClick={() => toggleSection(expand)}>
          <FontAwesomeIcon icon={icon} size="2x" color='rgba(0,0,0,0.6)' />
        </Toggle>
        {expand &&
          <>
            <SizeContainer>
              <SizeItem>
                <Size percentage={1} name='Large (13")' />
              </SizeItem>
              <SizeItem>
                <Size percentage={0.85} name='Medium (11")' />
              </SizeItem>
              <SizeItem>
                <Size percentage={0.7} name='Small (9")' />
              </SizeItem>
            </SizeContainer>
            <ToppingContainer>
              {TOPPINGS.map((topping) => (
                <ToppingItem key={topping}>
                  <Topping name={topping} />
                </ToppingItem>
              ))}
            </ToppingContainer>
          </>
        }
      </Section>
    </Layout >
  )
}

export default ChooseYourPizza;