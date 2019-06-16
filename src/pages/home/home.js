import React from "react"
import styled from "styled-components"

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

  return (
    <div style={{ backgroundColor : '#f2f5ff' ,
    padding : '2em'
  }}>
      <div>
        <Title> Maximising the Remote Worker </Title>
        <Text>
          Remotify is an Open Sourced , Customizable and Flexible remote office
          for Remote workers with tools to increase productivity and reduce
          distractions
        </Text>
      </div>
    </div>
  )
}

export default Home
