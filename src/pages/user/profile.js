import React, { useState } from 'react';
import Header from '../head/header';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const profile = () => {
  const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Cards = styled.div({
    ...autoGrid(220, 20),
    padding: '2em',
  });

  const Card = styled.div({
    height: '20vh',
    padding: '1em',
    paddingTop: '2.5em',
    width: '12em',
    borderRadius: '10px',
    boxShadow: '0px 3px 5px grey',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  });

  const Head = styled.div({
    padding: '0.5em',
    width: '100%',
    background: '#361f94',
    color: 'white',
  });

  const Button = styled.button`
    background: #fff;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #361f94;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      color: #fff;
      background: transparent;
    }
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const [Create, setCreate] = useState(false);
  const [Chart, setChart] = useState(false);

  const createButton = () => {
    setCreate(false);
  };

  return (
    <div>
      <Header style={false} />
      <Head
        style={{
          boxShadow: '0px 3px 5px grey',
        }}
      >
        <Flex justifyBetween>
          {!Create ? (
            <Button onClick={() => setCreate(true)}>
              <p>Create Team </p>
            </Button>
          ) : (
            <div>
              <Flex>
                <input
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '0.7px solid white ',
                    padding: '0.5em',
                    paddingLeft: '2em',
                    width: '20em',
                  }}
                  placeholder="Team Name"
                />
                <Button
                  onClick={() => {
                    createButton();
                  }}
                >
                  Create{' '}
                </Button>
              </Flex>
            </div>
          )}

          <Hover>
            {!Chart ? (
              <div
                onClick={() => {
                  setChart(true);
                }}
              >
                <p> Charts View </p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setChart(false);
                }}
              >
                <p> Board View </p>
              </div>
            )}
          </Hover>
        </Flex>
      </Head>

      <div>
        {!Chart ? (
          <Cards>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <h5> Frontend Team </h5>
                <p> 5 members </p>
              </div>
            </Card>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <h5> Frontend Team </h5>
                <p> 5 members </p>
              </div>
            </Card>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <h5> Frontend Team </h5>
                <p> 5 members </p>
              </div>
            </Card>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <h5> Frontend Team </h5>
                <p> 5 members </p>
              </div>
            </Card>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <h5> Frontend Team </h5>
                <p> 5 members </p>
              </div>
            </Card>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <h5> Frontend Team </h5>
                <p> 5 members </p>
              </div>
            </Card>
          </Cards>
        ) : (
          <div>
            <h3 style={{ textAlign: 'center' }}> D3 team stats here </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default profile;
