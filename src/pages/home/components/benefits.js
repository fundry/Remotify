import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"

import Worker from "../svg/worker.svg"

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

  const Subheader = styled.h4`
    padding-right: 20% ${media.lessThan("medium")`
    font-size: 1.2em
    padding-right: 10%
`};
  `

  const Title = styled.li`
    font-size: 1.2em;
    ${media.lessThan("medium")`
      font-size: 1em
      padding-left : 20px
      padding-right : 5px
  `};
  `

  const ListBody = styled.div`
    margin-right : 10%
    padding-right: 20%
    padding-top: 15px
    ${media.lessThan("medium")`
        margin-right : 10%
    `};
  `

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = value => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  return (
    <Div>
      <br />

      <Flex column>
        <Head
          style={{
            textAlign: "right",
            fontWeight: "bold",
            color: "#0b33a2",
          }}
        >
          Enhance Performance, <br /> Reduce Distractions.
        </Head>
        <Subheader
          style={{
            textAlign: "right",
            fontWeight: "normal",
            color: "#0b33a2",
          }}
        >
          With a Virtual Assistant
        </Subheader>
      </Flex>

      <div style={{ padding: "1em" }}>
        {Width >= 450 ? (
          <Flex justifyAround>
            <img
              src={Worker}
              style={{ paddingLeft: "20%" }}
              alt="ilustration"
            />

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
        ) : (
          <div>
            <Flex justifyCenter>
              <img
                src={Worker}
                style={{ textAlign: "center", maxWidth: "30%" }}
                alt="ilustration"
              />{" "}
            </Flex>

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
          </div>
        )}
      </div>

      <br />
    </Div>
  )
}

export default Benefits
