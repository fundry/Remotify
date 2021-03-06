import React from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"

const Overview = () => {
  const Body = styled.div({
    padding: "0.5em",
    height: "530px",
    width: "20em",
    border: "1px solid grey",
  })

  const Contain = styled.div`
    padding-left: 0.5em;
  `

  const Head = styled.div({
    backgroundColor: "#000",
    padding: "0.5em",
    color: "#fff",
  })

  return (
    <div>
      <Head>
        {" "}
        <p style={{ textAlign: "center" }}> Overview </p>{" "}
      </Head>

      <Body>
        <Contain>
          <Flex column>
            <p> Official </p>
            <hr /> <br />
            <p style={{ textAlign: "center" }}> No Message </p>
          </Flex>
        </Contain>
        <br /> <br />
        <Contain>
          <Flex column>
            <p> Private </p>
            <hr /> <br />
            <p style={{ textAlign: "center" }}> No Message </p>
          </Flex>
        </Contain>
      </Body>
    </div>
  )
}

export default Overview
