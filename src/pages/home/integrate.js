import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Integration from './svg/integration.svg';

const Integrate = () => {
  const Div = {
    background: '#D87E2C',
    color: '#0C0233',
    padding: ' 1em', 
  };

  const Head = {
    textAlign: ' left',
    fontWeight: ' bold',
    paddingLeft: '4%',
  };

  const Title = {
    fontSize: ' 0.8em;',
    textAlign: 'left',
    paddingLeft: '7%',
  };

  const Integrations = 'Integrations';

  return (
    <div style={Div}>
      <h5 style={Head}> {Integrations.toUpperCase()} </h5>
      <p style={Title}> Get all your dev tools in one place. </p>

      <Flex justifyCenter>
        <img src={Integration} style={{ maxWidth: '40%' }} />
      </Flex>

      <br />
    </div>
  );
};

export default Integrate;
