import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import posed from "react-pose"
import media from "styled-media-query"

const Cases = () => {
  const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      textAlign: "center",
    },
    hover: {
      scale: 1.02,
    },
    press: {
      scale: 1.1,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
  })

  const Card = styled.div({
    height: "30vh",
    padding: "1em",
    paddingTop: "2em",
    width: "25em",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px grey",
    background: "transparent",
    color: "#000",
  })

  const Button = styled.button`
    background: #361f94;
    border: 1px solid #0e2f5a;
    border-radius: 7px;
    color: #fff;
    margin: 0 1em;
    padding: 1em 3em;
    :hover {
      font-size: 1em;
    }
    ${media.lessThan("medium")`
      padding: 0.70em 1em;
      margin: 0 0.50em;
      border-radius: 5px;
    `};
  `

  const Title = styled.h3`
    font-size: 1.3em;
  `

  return (
    <Flex justifyCenter>
      <div>
        <Box>
          <Card>
            <Title style={{ textAlign: "left" }}> Remotify for Events </Title>

            <Button> Learn more </Button>
          </Card>
        </Box>
      </div>
    </Flex>
  )
}

export default Cases
