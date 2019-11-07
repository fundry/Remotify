import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Modal } from "react-bootstrap"
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi"
import media from "styled-media-query"
import { Link } from "gatsby"

const Footer = () => {
  const Div = {
    backgroundColor: "#5919AB",
    width: " 100%",
  }

  const Head = {
    fontSize: "0.9em ",
    fontWeight: "bold",
    color: "#fff",
  }

  const Title = {
    fontSize: "0.8em",
    color: "#fff",
  }

  const Testing = styled.div({
    textAlign: "center",
    background: "#0e2f5a",
    padding: "1em",
    color: "#fff",
  })

  const Input = styled.input({
    padding: "1em",
    paddingLeft: "2em",
    width: "26em",
    border: "0px",
    background: "transparent",
  })

  const Box = styled.div({
    border: "1px solid #361f94 ",
    borderRadius: "0px 15px 15px 0px",
    height: "7vh",
  })

  const Button = styled.button`
    background: #5919ab;
    border: 1px solid #0e2f5a;
    border-radius: 0px 15px 15px 0px  ;
    color: #fff;
    height: 7.1vh,
    margin: 0 1em;
    padding: 0.50em 1.5em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
    }
  `

  const ModalButton = styled.button`
    background: #5919ab;
    border: 1px solid #0e2f5a;
    border-radius: 0px 15px 15px 0px  ;
    color: #fff;
    height: 7.1vh,
    margin: 0 1em;
    padding: 1.25em 1.7em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
    }
  `

  const Test = styled.p`
    font-size: 1.2em;
    padding-top: 10px;
    ${media.lessThan("medium")`
      font-size: 1em
  `};
  `

  const Body = styled.div({
    padding: "1.4em",
  })

  const Header = styled.h3({
    textAlign: "center",
  })

  const Text = styled.p({
    padding: "0.5em",
    textAlign: "center",
  })

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = value => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  return (
    <div>
      <Testing>
        <Flex justifyBetween>
          <Test style={{ paddingLeft: Width >= 500 ? "50px" : "2px" }}>
            Join the Remotify beta testing program !
          </Test>

          {Width >= 470 ? (
            <Link to="/testing/testers">
              <Button
                onClick={() => {
                  setTestModal(true)
                }}
                style={{
                  paddingRight: "15px",
                  marginRight: "25px",
                  fontSize: "1.1em",
                }}
              >
                Join Program
              </Button>
            </Link>
          ) : (
            <Link to="/testing/testers">
              <Button
                onClick={() => {
                  setTestModal(true)
                }}
                style={{
                  paddingRight: "15px",
                  fontSize: "1.1em",
                }}
              >
                Join
              </Button>
            </Link>
          )}
        </Flex>
      </Testing>

      <footer style={Div}>
        {Width >= 500 ? (
          <div style={{ padding: "2%" }}>
            <Flex justifyAround>
              <div>
                <h5 style={{ marginTop: "1em", color: "#fff" }}>
                  Remotify.Inc
                </h5>

                <Flex justifyAround>
                  <FiFacebook style={{ color: "black", fontSize: "1.5em" }} />
                  <FiTwitter style={{ color: "blue", fontSize: "1.5em" }} />
                  <FiGithub style={{ color: "black", fontSize: "1.5em" }} />
                </Flex>
              </div>
              <Flex column>
                <p style={Head}> PRODUCT </p>
                <p style={Title}> Create Team </p>
                <p style={Title}> Documentation </p>
                <p style={Title}> Billing </p>
              </Flex>
              <Flex column>
                <p style={Head}> HELP </p>
                <p style={Title}> Integrations </p>
                <p style={Title}> Guides </p>
                <p style={Title}> About Us </p>
              </Flex>

              <Flex column>
                <p style={Head}> MORE </p>
                <p style={Title}> Social </p>
                <p style={Title}> Careers </p>
                <p style={Title}> Legal terms </p>
              </Flex>
            </Flex>
          </div>
        ) : (
          <div style={{ padding: "0.5%" }}>
            <Flex justifyCenter>
              <div>
                <h5 style={{ marginTop: "1em", color: "#fff" }}>
                  Remotify.Inc
                </h5>

                <Flex justifyAround>
                  <FiFacebook style={{ color: "black", fontSize: "1.5em" }} />
                  <FiTwitter style={{ color: "blue", fontSize: "1.5em" }} />
                  <FiGithub style={{ color: "black", fontSize: "1.5em" }} />
                </Flex>
              </div>
            </Flex>

            <br />
            <Flex justifyAround>
              <Flex column>
                <p style={Head}> PRODUCT </p>
                <p style={Title}> Create Team </p>
                <p style={Title}> Documentation </p>
                <p style={Title}> Billing </p>
              </Flex>
              <Flex column>
                <p style={Head}> HELP </p>
                <p style={Title}> Integrations </p>
                <p style={Title}> Guides </p>
                <p style={Title}> About Us </p>
              </Flex>

              <Flex column>
                <p style={Head}> MORE </p>
                <p style={Title}> Social </p>
                <p style={Title}> Careers </p>
                <p style={Title}> Legal terms </p>
              </Flex>
            </Flex>
          </div>
        )}

        <div
          style={{
            marginTop: "1em",
            paddingTop: "0.5em",
            textAlign: "center",
            padding: "0.7%",
            backgroundColor: " #361f94",
            fontSize: "0.8em",
            color: "#fff",
          }}
        >
          <p>
            Copyright © {new Date().getFullYear()} , a subsidiary of the
            <a href="https://www.fundry.netlify.com"> Fundry Program </a>.
            <br /> <a href="/"> Terms of Service </a> or
            <a href="/"> Privacy Policies </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
