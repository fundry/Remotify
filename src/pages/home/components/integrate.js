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

  const Text = styled.p`
    font-size: 1.3em ${media.lessThan("medium")`
font-size: 1.1em
`};
  `

  return (
    <Div>
      <Flex justifyCenter>
        <div style={{ padding: "1em", width: "80%" }}>
          <Title style={{ textAlign: "center", fontWeight: "bold" }}>
            Migrating to Remotify made easier!
          </Title>

          <Text style={{ textAlign: "center" }}>
            Upload a csv , or txt file containing emails and names of those
            within your organization to add them to remotify.
          </Text>
        </div>
      </Flex>
    </Div>
  )
}

export default Integrate
