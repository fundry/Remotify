import React from 'react';
// import { observer, inject } from 'mobx-react';

import Header from './header';
import { Query } from 'react-apollo';
import { Test } from '../../data/queries';

const Banner = () => {
  const Contain = {
    background: ' #F0B65F ',
    color: '#fff',
  };

  /*
  <Query query={Test}>
  {({ loading, error, data: { info } }) => {
    if (loading) return <p> loadinsg </p>;
    if (error) return <p> error </p>;

    return <p> {info} </p>;
  }}
</Query>
*/

  return (
    <div style={Contain}>
      <Header />

      <div
        style={{
          padding: '5em',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontWeight: 'bold' }}> Productivity Centralized. </h2>

      </div>
    </div>
  );
};

// export default inject('Store')(observer(Banner));
export default Banner;
