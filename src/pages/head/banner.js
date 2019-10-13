import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { Query } from 'react-apollo';

import Header from './header';
import { Test } from '../../data/queries';

const Banner = () => {
  const Contain = styled.div`
    background: #f0b65f ${media.lessThan('medium')`
    background: #F0B65F 
    `};
  `;

  const testingGraphql = false;
  return (
    <Contain>
      <Header />

      <div
        style={{
          paddingTop: '5.5em',
          height: '27vh',
          textAlign: 'center',
          color: '#fff',
          cursor: 'grab',
        }}
      >
        <Carousel indicators={false}>
          <Carousel.Item>
            <h2 style={{ fontWeight: 'bold' }}> Productivity Centralized. </h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2 style={{ fontWeight: 'bold' }}>Project Files Together. </h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2 style={{ fontWeight: 'bold' }}> Secret Keys Management. </h2>
          </Carousel.Item>
        </Carousel>

        {testingGraphql ? (
          <Query query={Test}>
            {({ loading, error, data: { info } }) => {
              if (loading) return <p> loadinsg </p>;
              if (error) return <p> error </p>;

              return <p> {info} </p>;
            }}
          </Query>
        ) : null}
      </div>
    </Contain>
  );
};

export default Banner;
