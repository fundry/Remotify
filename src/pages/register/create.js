import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import Header from '../head/header';

const form = () => {
  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border: 1px solid #0e2f5a;
    border-radius: 5px;
    color: #fff;
    margin: 0 1em;
    font-size: 1.1em;
    padding: 0.7em 2.5em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
      cursor : pointer
    }
  `;
  return (
    <div>
      <Header style={false} />
      <Flex justifyCenter>
        <div style={{ padding: '1em' }}>
          <h3 style={{ textAlign: 'center' }}>Create Group Team</h3> <hr />
          <form>
            {' '}
            <div>
              <h5> Team Name </h5>
              <input
                style={{
                  height: '6vh',
                  width: '30em',
                  borderRadius: '3px',
                  paddingLeft: '10px',
                }}
                placeholder="DragonFire"
              />
            </div>
            <br />
            <div>
              <h5> Team Email Address </h5>
              <input
                style={{
                  height: '7.5vh',
                  width: '30em',
                  borderRadius: '5px',
                  paddingLeft: '10px',
                }}
                placeholder="team@email.com"
              />
            </div>
          </form>
        </div>
      </Flex>
      <Flex justifyCenter >
        <Button> Continue </Button>{' '}
      </Flex>
    </div>
  );
};

export default form;
