import React from 'react';
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import { Image } from 'react-bootstrap'
import {  } from 'react-icons/fi'

import Layout from '../../../components/layout';
import Header from '../../head/header';

const profile = () => {

const  Body  = styled.div`
padding : 0.5em
`
const Details = styled.div``

  return (
    <Layout>
      <Header style={false} />

        <Body>

          <Flex >
            <Image src={require('./sample.png')}
            style={{height : '120px'}}
            roundedCircle
            />

            <Details>
                <Flex column >
                    <h3> Fundry </h3>
                    <a href="https://fundry.netlify.com" > Fundry website  </a>
                    <p> 11, Menlo Park , California </p>
                </Flex>
            </Details>

          </Flex>

        </Body>

    </Layout>
  );
};

export default profile;
