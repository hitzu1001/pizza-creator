import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 30px 0 0;
`;

const Label = styled.h4`
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0,0,0,0.6);
`;

const Sign = styled.span`
  font-size: 14px;
  color: #E01D3B;
`;

const StyledInput = styled.input`
  margin-top: 15px;
  height: 30px;
  width: 90%;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.02);
  border: 1px solid #d7d7e7;
  outline: none;
  padding: 8px 8px;
  font-size: 16px;
  color: rgba(0,0,0,0.8);
`;

const Input = ({ label, required }) => (
  <Layout>
    <Label>
      {label}
      <Sign>{required && ` *`}</Sign>
    </Label>
    <StyledInput />
  </Layout>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}
export default Input;