import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import media from "styled-media-query"

import Integration from "../svg/integration.svg"

const Integrate = () => {
  const Div = styled.div({
    color: "#0C0233",
    padding: " 1em",
  })

  const Title = styled.h2`
    ${media.lessThan("medium")`
    font-size: 1.4em
  `};
  `

  return (
    <Div>
      <Flex justifyCenter>
        <div style={{ padding: "1em", width: "80%" }}>
          <Title style={{ textAlign: "center", fontWeight: "bold" }}>
            Perfect Office for every worker.
          </Title>
        </div>
      </Flex>
    </Div>
  )
}

export default Integrate
