import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiSend } from "react-icons/fi"

const Private = () => {
  const Body = styled.div({
    padding: "0.5em",
    height: "530px",
    width: "30em",
    border: "1px solid grey",
  })

  const Input = styled.input({
    width: "25em",
    height: "40px",
    borderRadius: "3px",
    fontSize: "15px",
    padding: "5px",
    paddingLeft: "5px",
    border: "0px",
  })

  const Box = styled.div({
    width: "27em",
    height: "50px",
    border: "1px solid grey",
    padding: "0.5em",
    background: "#fff",
    borderRadius: "3px",
  })

  const Hover = styled.div({
    cusor: "pointer",
  })

  const Head = styled.div({
    backgroundColor: "grey",
    padding: "0.5em",
    color: "#fff",
  })

  return (
    <div>
      <Head>
        {" "}
        <p style={{ textAlign: "center" }}> Private Messages </p>{" "}
      </Head>

      <Body>
        <p> List of Private Messages</p>

        <Flex justifyCenter>
          <Box>
            <Flex>
              <Input placeholder="Enter Message" type="text" id="text" />

              <Hover style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                <FiSend style={{ fontSize: "1.5em", color: "grey" }} />
              </Hover>
            </Flex>
          </Box>
        </Flex>
      </Body>
    </div>
  )
}

export default Private
