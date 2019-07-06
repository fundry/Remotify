import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import Sample from './svg/console_sample.svg';

const features = () => {
  const Div = {
    background: 'linear-gradient(to bottom, #2b44ff, #0C0233)' ,
    color: '#fff',
    padding: '2em',
  };

  return (
    <div style={Div}>
      <Flex justifyCenter>
        <div style={{ padding: '2em' }}>
          <h3 style={{ textAlign: 'center' }}> Customizable Interface </h3>
          <p style={{ textAlign: 'center' }}>
            Switch between colors and lyouts to give the unique development
            environemt.
          </p>{' '}
          <Flex justifyCenter>
            <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
          </Flex>
        </div>
      </Flex>
      <Flex justifyCenter>
        <div style={{ padding: '2em' }}>
          <h3 style={{ textAlign: 'center' }}> Integrate External Tools </h3>
          <p style={{ textAlign: 'center' }}>
            Switch between colors and lyouts to give the unique development
            environemt.
          </p>{' '}
          <Flex justifyCenter>
            <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
          </Flex>
        </div>
      </Flex>
      <Flex justifyCenter>
        <div style={{ padding: '2em' }}>
          <h3 style={{ textAlign: 'center' }}> Monitor working performance </h3>
          <p style={{ textAlign: 'center' }}>
            Switch between colors and lyouts to give the unique development
            environemt.
          </p>{' '}
          <Flex justifyCenter>
            <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
          </Flex>
        </div>
      </Flex>{' '}
      <Flex justifyCenter>
        <div style={{ padding: '2em' }}>
          <h3 style={{ textAlign: 'center' }}> Track working hours.</h3>
          <p style={{ textAlign: 'center' }}>
            Switch between colors and lyouts to give the unique development
            environemt.
          </p>{' '}
          <Flex justifyCenter>
            <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
          </Flex>
        </div>
      </Flex>
    </div>
  );
};
export default features;
