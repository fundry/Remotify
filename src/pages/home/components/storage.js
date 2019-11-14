import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"

const Storage = () => {
  const Head = styled.h2``
  const Subhead = styled.h4``

  const Body = styled.div`
    padding: 1em;
    color: #361f94;
    ${media.lessThan("medium")`
      paddingLeft : 5em
    `};
  `

  return (
    <Body>
      <Flex column>
        <Head>Cloud Storage.</Head>
        <Subhead>For your assets</Subhead>
      </Flex>
    </Body>
  )
}

export default Storage
