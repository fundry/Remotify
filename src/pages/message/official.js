import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"
import { FiSend } from "react-icons/fi"

const Official = () => {
  const Body = styled.div({
    padding: "0.5em",
    height: "530px",
    width: "35em",
    border: "1px solid grey",
  })

  const Input = styled.input({
    width: "28em",
    height: "40px",
    borderRadius: "3px",
    fontSize: "17px",
    padding: "5px",
    paddingLeft: "15px",
    border: "0px",
  })

  const Box = styled.div({
    width: "30em",
    height: "50px",
    border: "1px solid grey",
    padding: "0.5em",
    background: "#fff",
    borderRadius: "2px",
  })

  const Hover = styled.div({
    cusor: "pointer",
  })

  const Head = styled.div({
    backgroundColor: "#361f94",
    padding: "0.5em",
    color: "#fff",
  })

  return (
    <div>
      <Head>
        {" "}
        <p style={{ textAlign: "center" }}> Official </p>{" "}
      </Head>
      <Body>
        <p> List of Official Messages</p>

        <Flex justifyCenter>
          <Box>
            <Flex>
              <Input placeholder="Enter Message" type="text" id="text" />

              <Hover style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                <FiSend style={{ fontSize: "1.8em", color: "grey" }} />
              </Hover>
            </Flex>
          </Box>
        </Flex>
      </Body>
    </div>
  )
}

export default Official
