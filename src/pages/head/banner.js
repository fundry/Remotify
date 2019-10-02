import React from 'react';
import media from 'styled-media-query'
import styled from 'styled-components'

import Header from './header';
import { Query } from 'react-apollo';
import { Test } from '../../data/queries';

const Banner = () => {
 
  const Contain  = styled.div`
    background: #F0B65F 

    /* working example of styled-media-queries */
     ${media.lessThan("medium")`
    background: #F0B65F 
    `}
  `

  const testingGraphql = false;
  return (
    <Contain>
      <Header />

      <div
        style={{
          paddingTop: '5.5em',
          height: '27vh',
          textAlign: 'center',
         color : '#fff'
        }}
      >
        <h2 style={{ fontWeight: 'bold' }}> Productivity Centralized. </h2>

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
