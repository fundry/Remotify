import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"

import Header from "./header"

const Banner = () => {
  const Div = styled.div`
  background: #F0B65F 
  color : #fff
  `

  return (
    <Div>
      <Header />

      <div
        style={{
          padding: "5%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}> Productivity Centralized. </h2>
      </div>
    </Div>
  )
}

export default Banner
