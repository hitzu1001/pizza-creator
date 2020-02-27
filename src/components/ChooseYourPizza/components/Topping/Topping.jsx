import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import anchovy from './assets/anchovy.svg';
import bacon from './assets/bacon.svg';
import base from './assets/base.svg';
import basil from './assets/basil.svg';
import board from './assets/board.svg';
import chili from './assets/chili.svg';
import mozzarella from './assets/mozzarella.svg';
import mushroom from './assets/mushroom.svg';
import olive from './assets/olive.svg';
import onion from './assets/onion.svg';
import pepper from './assets/pepper.svg';
import pepperoni from './assets/pepperoni.svg';
import prawn from './assets/prawn.svg';
import sweetcorn from './assets/sweetcorn.svg';
import tomato from './assets/tomato.svg';

const TOPPING_IMAGE = {
  anchovy,
  bacon,
  base,
  basil,
  board,
  chili,
  mozzarella,
  mushroom,
  olive,
  onion,
  pepper,
  pepperoni,
  prawn,
  sweetcorn,
  tomato,
};

const Layout = styled.div`
  display: flex;
  align-items: center;

`;

const Image = styled.img`
  height: 35px;
  width: 35px;
  padding: 5px;
  border-radius: 3px 0 0 3px;
  background: #e6e6e6 no-repeat center center;
  cursor: pointer;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 45px;
  width: 100px;
  border-radius: 0 3px 3px 0;
  background: rgba(0,0,0,0.05);
  cursor: pointer;
`;

const Name = styled.p`
  color: rgba(0,0,0,0.7);
`;

const Topping = ({ name }) => {
  const image = TOPPING_IMAGE[name.toLowerCase()];

  return (
    <Layout>
      <Image src={image} alt={name} />
      <NameContainer>
        <Name>
          {name}
        </Name>
      </NameContainer>
    </Layout>
  );
}

Topping.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Topping;
