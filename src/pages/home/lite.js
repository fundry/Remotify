import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { DiTrello, DiGithub, DiWordpress, DiCloud9 } from 'react-icons/di';
import { FiArrowRight, FiCodesandbox } from 'react-icons/fi';
import Flex from 'styled-flex-component';

const Lite = () => {
  const Body = styled.div`padding: 1em;`;

  const Title = styled.h3`font-weight: bold;`;
  const Header = styled.div`text-align: center;`;

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

  const Button = styled.button`
    background: transparent;
    border: 1.3px solid #0e2f5a;
    border-radius: 2px;
    color: #361f94;
    padding: 0.50em 2.75em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
    }
  `;

  const Discover = styled.p`
    font-size: 1.15em;
    padding-right: 5px;
  `;

  return (
    <Body>
      <Header>
        <Title> Installable Lite Apps </Title>
        <Text>
          Your working tools made installable within the Remotify environment.{' '}
        </Text>
        <Button>
          <Flex justifyAround>
            <Discover> Discover Apps </Discover>
            <FiArrowRight style={{ fontSize: '1.5em' }} />
          </Flex>
        </Button>
      </Header>
      <Apps>
        <Bounce
          onClick={() => {
            alert('true');
          }}
        >
          <Card>
            <DiTrello style={{ fontSize: '3.5em' }} />
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <DiGithub style={{ fontSize: '3.5em' }} />
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <DiWordpress style={{ fontSize: '3.5em' }} />
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <DiCloud9 style={{ fontSize: '3.5em' }} />
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <FiCodesandbox style={{ fontSize: '3.5em' }} />
          </Card>
        </Bounce>

        <Bounce>
          <Card>
            <DiTrello style={{ fontSize: '3.5em' }} />
          </Card>
        </Bounce>
      </Apps>{' '}
    </Body>
  );
};

export default Lite;
