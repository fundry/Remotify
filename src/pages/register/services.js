import React from 'react';
import styled from 'styled-components';

import Header from '../head/header';
import Layout from '../../components/layout';

const Title = styled.h2({
  padding: '0.2em',
  fontWeight: 'bold',
});

const Intro = styled.p({
  fontSize: '1.2em',
  paddingLeft: '20px',
});

const Div = styled.div({
  padding: '0.3em',
});

const Body = styled.div({
  padding: '1em',
});

const services = () => {
  return (
    <Layout>
      <Header style={false} />

      <Div>
        <Intro style={{ textAlign: 'center' }}>
          Remotify is an Open Sourced , Customizable and Flexible remote office
          for Remote workers with features to increase productivity and reduce
          distractions.
        </Intro>

        <Body>
          <Title> Contest </Title>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>

        <br />
        <Body>
          <Title> Group </Title>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>

        <br />
        <Body>
          <Title> Organizations </Title>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>
      </Div>
    </Layout>
  );
};

export default services;
