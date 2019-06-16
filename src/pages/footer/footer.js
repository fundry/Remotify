import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Icon } from "semantic-ui-react"

const Footer = () => {
  const Div = styled.footer`
    background : grey
    color : #fff
    width : 100%
  `

  const Head = styled.p`
    font-size : 0.9em
    font-weight : bold
  `

  const Title = styled.p`
    font-size: 0.8em;
  `

  return (
    <Div>
      <div style={{ padding: "2%" }}>
        <Flex justifyAround>
          <div>
            <h5 style={{ marginTop: "1em" }}> Remotify.Inc </h5>

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
            <Head> GET HELP </Head>
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
        }}
      >
        <p>
          Copyright© {new Date().getFullYear()} , a subsidiary of the
          <a href="/"> Fundry Program </a>
          <br /> <a href="/"> Terms of Service </a> or{" "}
          <a href="/"> Privacy Policies </a>{" "}
        </p>
      </div>
    </Div>
  )
}

export default Footer
