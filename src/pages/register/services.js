import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Link } from "gatsby"
import media from "styled-media-query"

import Header from "../head/header"
import Layout from "../../components/layout"

const Title = styled.h3({
  padding: "0.2em",
  fontWeight: "normal",
})

const Intro = styled.div({
  fontSize: "1.2em",
  paddingLeft: "20px",
  padding: "1em",
})

const Div = styled.div({
  padding: "0.3em",
})

const Body = styled.div({
  padding: "1em",
})

const Button1 = styled.button`
  background: #361f94;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #fff;
  margin: 0 1em;
  font-size: 1em;
  padding: 0.5em 2.5em;
  :hover {
    font-size: 1em;
    cursor: pointer;
  }
`

const Button2 = styled.button`
  background: transparent;
  text-align: right;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #361f94;
  margin: 0 1em;
  font-size: 1em;
  padding: 0.7em 2.2em;
  :hover {
    cursor: pointer;
  }
`

const Text = styled.p({
  textAlign: "center",
  padding: "0.5em",
  fontSize: "1.2em",
})

const Motto = styled.h1`
  font-size: 3em ${media.lessThan("medium")`
    font-size: 2em
  `};
`

const MottoText = styled.p`
  font-size: 1.7em ${media.lessThan("medium")`
   font-size: 1.3em
 `};
`

const services = () => {
  return (
    <Layout>
      <Header style={false} />

      <Div>
        <Intro style={{ textAlign: "center" }}>
          <Motto
            style={{
              wordSpacing: "0.5em",
              fontWeight: "bold",
            }}
          >
            Connect. Plan. Execute{" "}
          </Motto>
          <MottoText
            style={{
              color: "grey",
            }}
          >
            Empowering remote teams.{" "}
          </MottoText>
          <br />
          <Flex justifyAround>
            <Button1> Get started</Button1>

            <Link to="/register/evaluate">
              <Button2>Evaluate Remotify</Button2>{" "}
            </Link>
          </Flex>
        </Intro>

        <Body>
          <Title> Remotify for Teams </Title>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>

        <br />
        <Body>
          <Title> Remotify for Hackathons </Title>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>

        <br />
        <Body>
          <Title> Remotify for Organizations </Title>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>
      </Div>
    </Layout>
  )
}

export default services
