import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Power from "./power"
import Integrate from "./integrate"
import Sample from "./svg/console_sample.svg"
import useWindowWidth from '../../hook_style'


const Home = () => {
  const Title = styled.p`
    font-size : 1.5em
    text-align: center
    font-weight : bold
    color : #361F94
    `

  const Text = styled.p`
    font-size: 1em;
    text-align : center
    padding-left : 25px
    padding-right : 25px
    color : #0e2f5a
  `

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 30px;
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
  height: 35px;
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
const hooks = useWindowWidth()

  return (
    <div>
      <div style={{ padding: "2em", backgroundColor: "#f2f5ff" }}>
        <Title> Maximising the Remote Worker </Title>
        <Text>
          Remotify is an Open Sourced , Customizable and Flexible remote office
          for Remote workers with tools to increase productivity and reduce
          distractions
        </Text>

        <div style={{ padding: "2em" }}>
          <Flex justifyCenter>
            <img src={Sample} style={{ maxWidth: "80%" }} />
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

      <br />
      <Integrate />
    </div>
  )
}

export default Home
