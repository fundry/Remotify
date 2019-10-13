import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import posed from 'react-pose';

import Header from '../head/header';
import Updates from './updates';
import Layout from '../../components/layout';

import Apple from '../../images/apple.svg';
import Win from '../../images/win.svg';
import Mint from '../../images/mint.svg';

const download = () => {
  const Title = styled.h4({});

  const Text = styled.p({ fontSize: '1.3em' });

  const Windows = styled.div({
    textAlign: 'center',
    padding: '1em',
  });

  const Mac = styled.div({
    textAlign: 'center',
    padding: '1em',
  });

  const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
    display: 'grid',
    textAlign: 'center',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Icons = styled.div({
    ...autoGrid(170, 10),
    padding: '1em',
  });

  const Linux = styled.div({
    textAlign: 'center',

    padding: '1em',
  });
  const Head = styled.div({
    padding: '1em',
    paddingTop: '20px',
    paddingBottom: '20px',
    textAlign: 'center',
    backgroundColor: '#f2f5ff',
    boxShadow: '0px 3px 5px grey',
  });

  const Button = styled.button`
    background: transparent;
    text-align: right;
    border: 2px solid #0e2f5a;
    border-radius: 4px;
    color: #000;
    margin: 0 1em;
    padding: 1em 3em;
    :hover {
      font-size: 1em;
      cursor: pointer;
    }
  `;

  const Download = styled.button`
    background: transparent;
    text-align: right;
    border: 2px solid #0e2f5a;
    border-radius: 4px;
    color: #000;
    margin: 0 1em;
    padding: 1em 3em;
    outline : none
    :hover {
      transition: 24s ease-in-out
      font-size: 1em;
      cursor: pointer;
    }
  `;

  return (
    <Layout>
      <Header style="download" />
      <div>
        <Head>
          <Text>
            Remotify Desktop has cross platform support to enable every one
            within the team integrate with their preferred machine type.
          </Text>

          <div>
            <p> Version 0.0.1 updated 10 days ago.</p>

            <Button onClick={() => {}}>View ChangeLog</Button>
          </div>
        </Head>

        <Flex justifyBetween>
          <br />
          <Windows>
            <img src={Win} style={{ maxWidth: '10%' }} />
            <Title> Windows </Title>
            <Text> Remotify for windows </Text>

            <Download> Download </Download>
          </Windows>
          <Mac>
            {' '}
            <img src={Apple} style={{ maxWidth: '10%' }} />
            <Title> MacOs </Title>
            <Text> Remotify for MacOs </Text>
            <Download> Download </Download>
          </Mac>
          <Linux>
            {' '}
            <img src={Mint} style={{ maxWidth: '10%' }} />
            <Title> Linux </Title>
            <Text> Remotify for Linux </Text>
            <Download> Download </Download>
          </Linux>{' '}
        </Flex>

        <Updates />
      </div>
    </Layout>
  );
};

export default download;
