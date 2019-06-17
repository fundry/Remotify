import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Icon } from "semantic-ui-react"

const Footer = () => {
  const Div = {
    backgroundColor : 'grey' ,
    width :' 100%' ,
  }

  const Head = styled.p`
    font-size : 0.9em
    font-weight : bold
    color : #0b33a2
  `

  const Title = styled.p`
    font-size: 0.8em;
    color: #0e2f5a
  `

  return (
    <footer style={Div}>
      <div style={{ padding: "2%" }}>
        <Flex justifyAround>
          <div  >
            <h5 style={{ marginTop: "1em" ,  color : '#361f94'}}> Remotify.Inc </h5>

            <Flex justifyCenter>
              <Icon name="facebook" color="blue" />
              <Icon name="twitter" color="blue" />
              <Icon name="github" color="black" />
            </Flex>
          </div>
          <Flex column>
            <Head> PRODUCT </Head>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
          </Flex>
          <Flex column>
            <Head> HELP </Head>
            <Title> Integrations </Title>
            <Title> Guides </Title>
            <Title> About Us </Title>
          </Flex>

          <Flex column>
            <Head> MORE </Head>
            <Title> Social </Title>
            <Title> Careers </Title>
            <Title> Legal terms </Title>
          </Flex>
        </Flex>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "0.7%",
          backgroundColor: " #444444",
          fontSize: "0.8em",
          color : '#fff'
        }}
      >
        <p>
          Copyright© {new Date().getFullYear()} , a subsidiary of the
          <a href="/"> Fundry Program </a>.
          <br /> <a href="/"> Terms of Service </a> or{" "}
          <a href="/"> Privacy Policies </a>{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
