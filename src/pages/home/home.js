import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { GoDesktopDownload } from 'react-icons/go';
import posed from 'react-pose';

import Power from './power';
import Integrate from './integrate';
import Sample from './svg/console_sample.svg';
import Features from './features';
import Register from '../register/register';

const Home = () => {
  const Title = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#361F94',
  };

  const Text = {
    fontSize: '1.2em',
    textAlign: 'center',
    paddingLeft: '25px',
    paddingRight: '25px',
    color: '#0e2f5a',
  };

  const Buttons = styled.button`
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

  const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      textAlign: 'center',
    },
    hover: {
      scale: 1.05,
    },
    press: {
      scale: 1.1,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
  });

  return (
    <div>
      <div style={{ padding: '2em', backgroundColor: '#f2f5ff' }}>
        <h3 style={Title}> Maximising the Remote Worker </h3>
        <p style={Text}>
          Remotify is an Open Sourced , Customizable and Flexible remote office
          for Remote workers with features to increase productivity and reduce
          distractions.
        </p>

        <div style={{ padding: '2em' }}>
          <Flex justifyCenter>
            <Box>
              <img src={Sample} style={{ maxWidth: '80%' }} />
            </Box>
          </Flex>
          <Flex justifyCenter>
            <div>
              <Buttons style={{ boxShadow: '0px 7px 7px #0b33a2' }}>
                <Flex>
                  <GoDesktopDownload
                    style={{
                      color: 'white',
                      fontSize: '2em',
                      paddingTop: '1px',
                      paddingRight: '5px',
                    }}
                  />
                  <p style={{ paddingTop: '5px' }}> Download v0.0.5(Beta) </p>
                </Flex>
              </Buttons>
              <h5 style={{ paddingTop: '0.7em', paddingLeft: '50px' }}>
                macOs , Windows , Linux
              </h5>
            </div>
          </Flex>
        </div>
      </div>

      <div>
        <Power />
        <Features />
        <Integrate />
        <Register />
      </div>
    </div>
  );
};

export default Home;
