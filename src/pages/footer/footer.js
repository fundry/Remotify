import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"

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
    font-size : 0.8em
  `

  return (
    <Div>
      <div style={{ padding: "2%" }}>
        <Flex justifyAround>
          <h4 style={{ marginTop: "2em" }}> Remotify </h4>

          <Flex column>
            <Head> PRODUCT </Head>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
          </Flex>
          <Flex column>
            <Head> GET HELP </Head>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
          </Flex>

          <Flex column>
            <Head> MORE </Head>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
            <Title> Integrations </Title>
          </Flex>
        </Flex>
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
