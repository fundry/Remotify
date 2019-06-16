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
    padding-right : 10%
`
  const Title = styled.li`
    font-size: 0.8em;
  `
  return (
    <Div>
      <Head>
        Enhance Performance, <br /> Reduce Distractions.
      </Head>

      <div style={{ padding: "1em" }}>
        <Flex justifyBetween>
          <img src={Worker}  style={{ paddingLeft : '10%' }}/>

          <div style={{ marginRight: "10%",  paddingTop: '20px'  ,color: "#0e2f5a" }}>
            <Flex column>
              <Title> Customizable Interface </Title>
              <Title> Integrate external tools </Title>
              <Title> Monitor Perfomance </Title>
              <Title> Control over time spent. </Title>
            </Flex>
          </div>
        </Flex>
      </div>
    </Div>
  )
}

export default Power
