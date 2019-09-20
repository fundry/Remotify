import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Header from '../head/header';
import Updates from './updates';
import Layout from '../../components/layout';

const download = () => {
  const Title = styled.h4({});

  const Text = styled.p({ fontSize: '1.3em' });

  const Windows = styled.div({ padding: '1em' });
  const Mac = styled.div({
    textAlign: 'right',
    padding: '1em',
  });

  const Linux = styled.div({ padding: '1.5em' });
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

  const [Update, setUpdate] = useState(false);
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

            {!Update ? (
              <Button
                onClick={() => {
                  setUpdate(true);
                }}
              >
                View ChangeLog
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setUpdate(false);
                }}
              >
                Download
              </Button>
            )}
          </div>
        </Head>

        {!Update ? (
          <div>
            <Windows>
              <Title> Windows </Title>
              <Text> Remotify for windows </Text>

              <Download> Download </Download>
            </Windows>
            <Mac>
              <Title> MacOs </Title>
              <Text> Remotify for MacOs </Text>
              <Download> Download </Download>
            </Mac>
            <Linux>
              <Title> Linux </Title>
              <Text> Remotify for Linux </Text>
              <Download> Download </Download>
            </Linux>{' '}
          </div>
        ) : (
          <Updates />
        )}
      </div>
    </Layout>
  );
};

export default download;
