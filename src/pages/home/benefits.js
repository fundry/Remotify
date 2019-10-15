import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"

import Worker from "./svg/worker.svg"

const Benefits = () => {
  const Div = styled.div`
      background : #fff
      padding : 1em
      margin-top : 2%
    `

  const Head = styled.h3`
    padding-right: 20% ${media.lessThan("medium")`
      font-size: 1.4em
      padding-right: 10%
    `};
  `

  const Header = {
    color: "#0b33a2",
  }

  const Title = styled.li`
    font-size: 1.2em;

    ${media.lessThan("medium")`
      font-size: 1em
      padding-left : 20px
  `};
  `

  const ListBody = styled.div`
    padding-right: 20%
    padding-top: 15px
    ${media.lessThan("medium")`
        margin-right : 10%
    `};
  `

  return (
    <Div>
      <br />
      <Head
        style={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#0b33a2",
        }}
      >
        Enhance Performance, <br /> Reduce Distractions.
      </Head>

      <div style={{ padding: "1em" }}>
        <Flex justifyBetween>
          <img src={Worker} style={{ paddingLeft: "20%" }} />

          <ListBody
            style={{
              color: "#0e2f5a",
            }}
          >
            <Flex column>
              <Title> Customizable Interface </Title>
              <Title> Integrate external tools </Title>
              <Title> Monitor Perfomance </Title>
              <Title> Control over time spent. </Title>
            </Flex>
          </ListBody>
        </Flex>
      </div>

      <br />
    </Div>
  )
}

export default Benefits
