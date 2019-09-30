import React from 'react';
import Flex from 'styled-flex-component';

import Integration from './svg/integration.svg';

const Integrate = () => {
  const Div = {
    color: '#0C0233',
    padding: ' 1em',
  };

  return (
    <div style={Div}>
      <Flex justifyCenter>
        <div style={{ padding: '2em', width: '80%' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Perfect Office for every worker.
          </h2>
        </div>
      </Flex>
    </div>
  );
};

export default Integrate;
