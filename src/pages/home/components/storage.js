import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import media from 'styled-media-query';

const Storage = () => {
  const Head = styled.h2``;
  const Subhead = styled.h4``;

  const Body = styled.div`
    padding: 1em;
    color: #361f94;
    ${media.lessThan('medium')`
      paddingLeft : 5em
    `};
  `;

  const [Width, setWidth] = useState(null);

  setTimeout(function() {
    setWidth(window.innerWidth);
  }, 100);

  const handleResize = (value) => {
    setWidth(value);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize.bind(this));
    return () => window.removeEventListener('resize', handleResize.bind(this));
  }, []);

  const HeadTextBody = styled.div`
    padding-left: 10em ${media.lessThan('medium')`
      padding-left : 1.5em
    `};
    ${media.lessThan('large')`
      padding-left : 7em
    `};
  `;

  return (
    <Body>
      <Flex column>
        <HeadTextBody>
          <Head style={{ fontWeight: 'bold' }}>Cloud Storage.</Head>
          <Subhead>For your assets</Subhead>
        </HeadTextBody>
      </Flex>
    </Body>
  );
};

export default Storage;
