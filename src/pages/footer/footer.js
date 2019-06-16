import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

const Footer = () => {
  const Div = styled.footer`
    background : grey
    color : #fff
    width : 100%
  `

  return (
    <Div>
      <div style = {{padding : '2%'}}>
        <h1> OTEHR CONTENT HERE </h1>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "1%",
          backgroundColor: " #444444",
        }}
      >
        Copyright© {new Date().getFullYear()} , a subsidiary of the
        <a href="/"> Fundry Program </a>
      </div>
    </Div>
  )
}

export default Footer
