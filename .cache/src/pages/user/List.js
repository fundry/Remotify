import React from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import posed from 'react-pose';

const List = () => {
  const Body = styled.div`padding: 0.7;`;

  const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
    display: 'grid',
    textAlign: 'center',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Images = styled.div({
    ...autoGrid(80, 7),
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    justifyContent: 'center',
    alignContent: 'center',
  });

  const Bounce = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      textAlign: 'center',
    },
    hover: {
      scale: 1.1,
    },
    press: {
      scale: 1.1,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
  });

  const Data = [
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
  ];

  return (
    <Body>
      <h4 style={{ textAlign: 'center' }}> Workers </h4>
      <Body>
        <h5 style={{ textAlign: 'left', paddingLeft: '17px' }}>Engineering </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require('./details/sample.png')}
                    style={{ height: '77px' }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{' '}
      </Body>{' '}
      <Body>
        <h5 style={{ textAlign: 'left', paddingLeft: '17px' }}>Engineering </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require('./details/sample.png')}
                    style={{ height: '77px' }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{' '}
      </Body>
      <Body>
        <h5 style={{ textAlign: 'left', paddingLeft: '17px' }}>Engineering </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require('./details/sample.png')}
                    style={{ height: '77px' }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{' '}
      </Body>
      <Body>
        <h5 style={{ textAlign: 'left', paddingLeft: '17px' }}>
          {' '}
          Engineering{' '}
        </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require('./details/sample.png')}
                    style={{ height: '77px' }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{' '}
      </Body>
    </Body>
  );
};

export default List;
