import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

import Integration from "./svg/integration.svg"

const Integrate = () => {
  const Div = styled.div`
background : #f2f5ff
padding : 1em
margin-top : 2%
`

  const Head = {
fontSize :' 0.8em' ,
textAlign :' left' ,
color : '#0b33a2' ,
paddingLeft : '5%' ,
  }

  const Title = {
    fontSize:' 0.8em;',
    textAlign : 'left',
paddingLeft : '7%',
    color : '#0e2f5a',
  }
  const Integrations = "Integrations"

  return (
    <Div>
      <p style={Head}> {Integrations.toUpperCase()} </p>
      <p style={Title}> Get all your dev tools in one place. </p>

      <Flex justifyCenter>
        <img src={Integration} style={{maxWidth : '40%'}} />
      </Flex>

      <br />
    </Div>
  )
}

export default Integrate
