import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { GoDesktopDownload } from "react-icons/go"
import { DiApple, DiWindows, DiLinux } from "react-icons/di"
import posed from "react-pose"
import { Link } from "gatsby"
import media from "styled-media-query"

import { Benefits, Integrate, Features, Lite, Time } from "./index"
import Sample from "./svg/console_sample.svg"
import Pricing from "../register/pricing"

// import Benefits from './components/benefits'
// import Integrate from './components/integrate'
// import Features from './components/features'
// import Lite from './components/lite'
// import Time from './components/time'

const Home = () => {
  const Title = styled.h3`
    color: #361f94;
    ${media.lessThan("medium")`
      font-size: 1.5em
    `};
  `
  const Text = styled.p`
    font-size: 1.2em;
    color: #0e2f5a;
    ${media.lessThan("medium")`
      font-size: 1em
    `};
  `

  const Buttons = styled.button`
    background: #361f94;
    border: 1px solid #0e2f5a;
    border-radius: 7px;
    color: #fff;
    margin: 0 1em;
    padding: 1em 3em;
    :hover {
      font-size: 1em;
    }
    ${media.lessThan("medium")`
      padding: 0.70em 1em;
      margin: 0 0.50em;
      border-radius: 5px;
    `};
  `

  const SystemType = styled.h5`
    padding-left: 50px ${media.lessThan("medium")`
        padding-left: 10px;
        font-size : 1.2em
    `};
  `

  const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      textAlign: "center",
    },
    hover: {
      scale: 1.05,
    },
    press: {
      scale: 1.1,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
  })

  const [Download, setDownload] = useState(false)
  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  return (
    <div>
      <div style={{ padding: "1.5em", backgroundColor: "#f2f5ff" }}>
        <Title style={{ textAlign: "center", fontWeight: "bold" }}>
          Maximising the Remote Worker{" "}
        </Title>
        <Text
          style={{
            textAlign: "center",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          Remotify is an Open Sourced , Customizable and Flexible remote office
          for Remote workers with features to increase productivity and reduce
          distractions.
        </Text>

        <div style={{ padding: "1em" }}>
          {Width >= 530 ? (
            <Flex justifyCenter>
              <Box>
                <img
                  alt="Sample Desktop"
                  src={Sample}
                  style={{ maxWidth: Width >= 700 ? "60%" : "70%" }}
                />
              </Box>
            </Flex>
          ) : null}
          <div>
            {Download ? (
              <div>
                <Flex justifyCenter>
                  <Flex justifyAround>
                    <Buttons style={{ boxShadow: "0px 7px 7px #0b33a2" }}>
                      <Flex>
                        <DiApple
                          style={{
                            color: "white",
                            fontSize: "2em",
                            paddingTop: "1px",
                            paddingRight: "5px",
                          }}
                        />
                        <p style={{ paddingTop: "5px" }}> macOs</p>
                      </Flex>
                    </Buttons>{" "}
                    <Buttons style={{ boxShadow: "0px 7px 7px #0b33a2" }}>
                      <Flex>
                        <DiWindows
                          style={{
                            color: "white",
                            fontSize: "2em",
                            paddingTop: "1px",
                            paddingRight: "5px",
                          }}
                        />
                        <p style={{ paddingTop: "5px" }}> Windows</p>
                      </Flex>
                    </Buttons>{" "}
                    <Buttons style={{ boxShadow: "0px 7px 7px #0b33a2" }}>
                      <Flex>
                        <DiLinux
                          style={{
                            color: "white",
                            fontSize: "2em",
                            paddingTop: "1px",
                            paddingRight: "5px",
                          }}
                        />
                        <p style={{ paddingTop: "5px" }}> Linux</p>
                      </Flex>
                    </Buttons>
                  </Flex>
                </Flex>{" "}
                <br />
                <Flex justifyCenter>
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <h6> Version 0.9(beta) </h6>
                      <Link to="/download/download"> View Changelog</Link>
                    </div>
                    <h6>
                      By clicking download you agree to the Remotify{" "}
                      <Link to="/terms"> Terms </Link>
                    </h6>
                  </div>
                </Flex>
              </div>
            ) : (
              <Flex justifyCenter>
                <div>
                  <Buttons
                    onClick={() => setDownload(true)}
                    style={{ boxShadow: "0px 7px 7px #0b33a2" }}
                  >
                    <Flex>
                      <GoDesktopDownload
                        style={{
                          color: "white",
                          fontSize: "2em",
                          paddingTop: "1px",
                          paddingRight: "5px",
                        }}
                      />
                      <p style={{ paddingTop: "5px" }}>
                        Download v0.0.5(Beta){" "}
                      </p>
                    </Flex>
                  </Buttons>
                  <SystemType style={{ paddingTop: "0.75em" }}>
                    macOs , Windows , Linux
                  </SystemType>
                </div>
              </Flex>
            )}
          </div>
        </div>
      </div>

      <div>
        <Benefits />
        <Time />
        <Lite />
        <Features />
        <Integrate />
        <Pricing />
      </div>
    </div>
  )
}

export default Home
