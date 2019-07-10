import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import Sample from './svg/console_sample.svg';
import posed from 'react-pose';
import useWindowWidth from '../../hook_style';

const features = () => {
  const Div = {
    background: 'linear-gradient(to bottom, #2b44ff, #0C0233)',
    color: '#fff',
    padding: '2em',
  };

  const Hover = posed.div({
    hoverable: true,
    init: {
      scale: 1,
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

  const hooks = useWindowWidth();

  return (
    <div>
      {hooks >= 1000 ? (
        <div style={Div}>
          <Flex justifyCenter>
            <div style={{ padding: '2em', width: '70%' }}>
              <h2 style={{ textAlign: 'center' }}> Customizable Interface </h2>
              <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </p>
            </div>
            <Hover>
              <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
            </Hover>
          </Flex>
          <Flex justifyCenter>
            <Hover>
              <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
            </Hover>
            <div style={{ padding: '2em', width: '70%' }}>
              <h2 style={{ textAlign: 'center' }}>
                {' '}
                Integrate External Tools{' '}
              </h2>
              <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </p>
            </div>
          </Flex>
          <Flex justifyCenter>
            <div style={{ padding: '2em', width: '70%' }}>
              <h2 style={{ textAlign: 'center' }}>
                {' '}
                Monitor working performance {' '}
              </h2>
              <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </p>
            </div>
            <Hover>
              <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
            </Hover>
          </Flex>
          <Flex justifyCenter>
            <Hover>
              <img src={Sample} style={{ maxWidth: '70%' }} />{' '}
            </Hover>
            <div style={{ padding: '2em', width: '70%' }}>
              <h2 style={{ textAlign: 'center' }}> Track working hours </h2>
              <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </p>
            </div>
          </Flex>
        </div>
      ) : (
        <div style={Div}>
          <Flex justifyCenter>
            <div style={{ padding: '2em' }}>
              <h3 style={{ textAlign: 'center' }}> Customizable Interface </h3>
              <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
                Switch between colors and layouts to create your unique working
                environemt environemt.
              </p>{' '}
              <Flex justifyCenter>
                <Hover>
                  <img src={Sample} style={{ maxWidth: '75%' }} />{' '}
                </Hover>
              </Flex>
            </div>
          </Flex>
          <Flex justifyCenter>
            <div style={{ padding: '2em' }}>
              <h3 style={{ textAlign: 'center' }}>
                {' '}
                Integrate External Tools{' '}
              </h3>
              <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
                Switch between colors and lyouts to give the unique development
                environemt.
              </p>{' '}
              <Flex justifyCenter>
                <Hover>
                  <img src={Sample} style={{ maxWidth: '75%' }} />{' '}
                </Hover>
              </Flex>
            </div>
          </Flex>
          <Flex justifyCenter>
            <div style={{ padding: '2em' }}>
              <h3 style={{ textAlign: 'center' }}>
                {' '}
                Monitor working performance{' '}
              </h3>
              <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
                Switch between colors and lyouts to give the unique development
                environemt.
              </p>{' '}
              <Flex justifyCenter>
                <Hover>
                  <img src={Sample} style={{ maxWidth: '75%' }} />{' '}
                </Hover>
              </Flex>
            </div>
          </Flex>{' '}
          <Flex justifyCenter>
            <div style={{ padding: '2em' }}>
              <h3 style={{ textAlign: 'center' }}> Track working hours.</h3>
              <p style={{ textAlign: 'center', fontSize: '1.1em' }}>
                Switch between colors and lyouts to give the unique development
                environemt.
              </p>{' '}
              <Flex justifyCenter>
                <Hover>
                  <img src={Sample} style={{ maxWidth: '75%' }} />{' '}
                </Hover>
              </Flex>
            </div>
          </Flex>
        </div>
      )}
    </div>
  );
};
export default features;