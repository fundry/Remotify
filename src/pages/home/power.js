import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Worker from "./svg/worker.svg"

const Power = () => {
  const Div = styled.div`
        background : #fff
        padding : 0.5em
        margin-top : 2%
    `

  const Head = styled.p`
    font-size : 1.05em
    text-align : right
    font-weight : bold
    color : #0b33a2
`
  const Title = styled.p`
    font-size: 0.8em;
  `
  return (
    <Div>
      <Head>
        Enhance Production, <br /> Reduce Distractions.
      </Head>

      <div style={{ padding: "1em" }}>
        <Flex justifyBetween>
          <img src={Worker} />

          <div style={{marginRight: '10%'}}>
            <Flex column>
              <Title> Integrations </Title>
              <Title> Integrations </Title>
              <Title> Integrations </Title>
            </Flex>
          </div>
        </Flex>
      </div>
    </Div>
  )
}

export default Power
