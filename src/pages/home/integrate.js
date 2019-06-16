import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Integration from "./svg/integration.svg"

const Integrate = () => {
  const Div = styled.div`
background : #f2f5ff
padding : 1em
margin-top : 2%
`

  const Head = styled.p`
font-size : 0.8em
text-align : left
color : #0b33a2
padding-left : 5%
`

  const Title = styled.p`
    font-size: 0.8em;
    text-align : left
padding-left : 7%
    color : #0e2f5a
  `
  const Integrations = "Integrations"

  return (
    <Div>
      <Head> {Integrations.toUpperCase()} </Head>
      <Title> Get all your dev tools in one place. </Title>

      <Flex justifyCenter>
        <img src={Integration} style={{maxWidth : '40%'}} />
      </Flex>

      <br />
    </Div>
  )
}

export default Integrate
