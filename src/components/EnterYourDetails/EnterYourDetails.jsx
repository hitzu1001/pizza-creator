import React from 'react';
import styled from 'styled-components';
import Section from '../Section/Section';
import Input from './Input/Input';

const Layout = styled.div`
  padding: 20px 30px;
`;

const Form = styled.div`
  display: flex;
`;

const EnterYourDetails = () => (
  <Layout>
    <Section
      title="Enter your details"
    >
      <Form>
        <Input label='NAME' required={true} />
        <Input label='EMAIL' required={true} />
        <Input label='CONFIRM EMAIL' required={true} />
      </Form>
      <Form>
        <Input label='ADDRESS' required={true} />
        <Input label='POSTCODE' required={true} />
        <Input label='CONTACT' required={true} />
      </Form>
    </Section>
  </Layout>
)

export default EnterYourDetails;