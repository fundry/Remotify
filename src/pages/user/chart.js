import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const map = () => {
  const Body = styled.div`padding: 1em;`;

  const Hover = styled.div`
    border  : 1px solid black
    border-radius : 10px 
    &:hover {
      border: 1.5px solid blue;
    }
  `;

  return (
    <Body>
      <p> D3 team stats here </p>

      <Flex justifyCenter>
        <Hover
          onMouseEnter={() => {
            console.log('Entered');
          }}
          onMouseLeave={() => {
            console.log('Left');
          }}
        >
          <p> Testing Hovers</p>
        </Hover>
      </Flex>
    </Body>
  );
};

export default map;
