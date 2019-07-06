import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Power from "./power"
import Integrate from "./integrate"
import Sample from "./svg/console_sample.svg"
import posed from "react-pose"
import Features from './features'
// import useWindowWidth from '../../hook_style'

const Home = () => {
  const Title = {
    fontSize: "1.5em",
    textAlign: "center",
    fontWeight: "bold",
    color: "#361F94",
  }

  const Text = {
    fontSize: "1em",
    textAlign: "center",
    paddingLeft: "25px",
    paddingRight: "25px",
    color: "#0e2f5a",
  }

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 3em;
    font-size: 0.8em;
    &:hover {
      color: #0e2f5a;
      background: transparent;
    }
  `

  const Buttons = styled.button`
    background: #361f94;
    text-align: right;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 3em;
    font-size: 0.7em;
    &:hover {
      color: #0e2f5a;
      background: transparent;
    }
  `

  const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      textAlign  : 'center'
    },
    hover: {
      scale: 1.05,
    },
    press: {
      scale: 1.1,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
  })

  return (
    <div>
      <div style={{ padding: "2em", backgroundColor: "#f2f5ff" }}>
        <p style={Title}> Maximising the Remote Worker </p>
        <p style={Text}>
          Remotify is an Open Sourced , Customizable and Flexible remote office
          for Remote workers with tools to increase productivity and reduce
          distractions
        </p>

        <div style={{ padding: "2em" }}>
          <Flex justifyCenter>
            <Box>
              <img src={Sample} style={{ maxWidth: "80%" }} />{" "}
            </Box>
          </Flex>
          <Flex justifyCenter>
            <Button>Watch Demo</Button>
            <Buttons>Download</Buttons>
          </Flex>
        </div>
      </div>
      <>
        <Power />
      </>

      <Features />

   
      <Integrate />
    </div>
  )
}

export default Home
