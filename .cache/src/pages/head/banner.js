import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import { Query } from "react-apollo"

import Header from "./header"
import { Test } from "../../data/queries"

const Banner = props => {
  const Contain = styled.div`
    background: #f0b65f;
  `

  const Motto = styled.h2`
    ${media.lessThan("medium")`
    font-size: 1.6em
  `};
    font-weight: bold;
  `

  const Body = styled.div`
    height: 30vh;
    padding-top: 7em;
    ${media.lessThan("medium")`
      height: 23vh;
      padding-top: 4em;
  `};
  `

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  return (
    <Contain>
      <Header />

      <Body
        style={{
          textAlign: "center",
          color: "#fff",
          cursor: "grab",
        }}
      >
        <Carousel indicators={false}>
          <Carousel.Item>
            <Motto> Productivity Centralized. </Motto>
          </Carousel.Item>
          <Carousel.Item>
            <Motto>Project Files Together. </Motto>
          </Carousel.Item>
          <Carousel.Item>
            <Motto> Secret Keys Management. </Motto>
          </Carousel.Item>
        </Carousel>
      </Body>
    </Contain>
  )
}

export default Banner
