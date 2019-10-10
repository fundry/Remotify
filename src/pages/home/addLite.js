import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import posed from 'react-pose';
import { DiTrello, DiGithub, DiWordpress, DiCloud9 } from 'react-icons/di';
import { FiCodesandbox } from 'react-icons/fi';

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

        <Contain>
          <Title style={{ textAlign: 'left', fontSize: '1.5em' }}>
            {' '}
            Request App{' '}
          </Title>
        </Contain>
      </Body>
    </Layout>
  );
};

export default AddLite;
