import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const Pricing = () => {
  const Div = {
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

  return (
    <div style={Div}>
      <Flex justifyCenter>
        <div style={{ padding: '2em', width: '70%' }}>
          <h2 style={{ textAlign: 'center' }}>Pricing Model</h2>

          <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
            Designed to suit every worker , Remotify allows you bring in your
            external tools to your office.
          </p>
        </div>
      </Flex>{' '}
      <br />
    </div>
  );
};

export default Pricing;
