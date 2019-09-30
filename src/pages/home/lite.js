import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { DiTrello, DiGithub, DiWordpress, DiCloud9 } from 'react-icons/di';

const Lite = () => {
  const Body = styled.div`padding: 1em;`;

  const Header = styled.h3`
    font-weight: bold;
    text-align: center;
  `;

  const Text = styled.p`
    text-align: center;
    font-size: 1.2em;
  `;

  const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Apps = styled.div({
    ...autoGrid(155, 15),
    padding: '2em',
    marginLeft: '1.5em',
  });

  const Bounce = posed.div({
    hoverable: true,
    init: {
      scale: 0.9,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      textAlign: 'center',
    },
    hover: {
      scale: 1,
    },
    press: {
      scale: 1.1,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
  });

  const Card = styled.div({
    height: '13vh',
    padding: '1em',
    paddingTop: '2.5em',
    width: '9em',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px grey',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  });

  return (
    <Body>
      <Header> Installable Lite Apps </Header>
      <Text>
        {' '}
        Your working tools made installable within the Remotify environment.{' '}
      </Text>
      <Apps>
        <Bounce
          onClick={() => {
            alert('true');
          }}
        >
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h5> Tello</h5>
            </div>
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h5> Frontend Team </h5>
            </div>
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h5> Frontend Team </h5>
            </div>
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h5> Frontend Team </h5>
            </div>
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h5> Frontend Team </h5>
            </div>
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h5> Frontend Team </h5>
            </div>
          </Card>
        </Bounce>
      </Apps>{' '}
    </Body>
  );
};

export default Lite;
