import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import posed from 'react-pose';
import { DiTrello } from 'react-icons/di';

import Header from '../head/header';
import Layout from '../../components/layout';

const List = [
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
];

const AddLite = () => {
  const Body = styled.div({
    padding: '0.5em',
  });

  const Title = styled.h3({
    textAlign: 'center',
  });

  const Contain = styled.div({
    padding: '1em',
  });

  const autoGrid = (minColumnWidth = 70, gridGap = 0) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Apps = styled.div({
    ...autoGrid(120, 10),
    padding: '1.5em',
    marginLeft: '1em',
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
    height: '10vh',
    padding: '1em',
    paddingTop: '1.7em',
    width: '7em',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px grey',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  });

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border: 1px solid #0e2f5a;
    border-radius: 7px;
    color: #fff;
    margin: 0 1em;
    padding: 1em 3em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
    }
  `;

  const [Request, setRequest] = useState(false);

  return (
    <Layout>
      <Header style={false} />

      <Body>
        <Contain>
          <Title> Supported Apps </Title>
          <Apps>
            {List.map(({ i }) => {
              return (
                <Bounce key={i}>
                  <Card>
                    <DiTrello style={{ fontSize: '2.7em' }} />
                  </Card>
                </Bounce>
              );
            })}
          </Apps>
        </Contain>
        <Flex justifyCenter>
          {!Request ? (
            <Button
              onClick={() => {
                setRequest(true);
              }}
              style={{ boxShadow: '0px 3px 5px #0b33a2' }}
            >
              Make App Request{' '}
            </Button>
          ) : (
            <Contain>
              <div>
                <input
                  style={{
                    height: '7.5vh',
                    width: '30em',
                    borderRadius: '5px',
                    paddingLeft: '15px',
                    border: '1px solid  #361f94 ',
                    fontSize: '1.2em',
                  }}
                  type="text"
                  placeholder="Make Request"
                />{' '}
                <br />
              </div>

              <Flex justifyCenter>
                <br />
                <Button> Submit </Button>
              </Flex>
            </Contain>
          )}
        </Flex>{' '}
        <br />
      </Body>
    </Layout>
  );
};

export default AddLite;
