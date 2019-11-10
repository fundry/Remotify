import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import Sample from "../svg/console_sample.svg"
import posed from "react-pose"

import styled from "styled-components"
import media from "styled-media-query"

const Features = () => {
  const Div = styled.div`
    padding: 1em;
  `

  const Title = styled.h2`
    ${media.lessThan("medium")`
      font-size: 1.3em
  `};
  `

  const Text = styled.p`
    font-size: 1.2em ${media.lessThan("medium")`
    font-size: 1em
`};
  `

  //   ${media.lessThan("medium")`
  //     font-size: 20px
  // `};

  const Hover = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      textAlign: "center",
    },
    hover: {
      scale: 1.02,
    },
    press: {
      scale: 1.1,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
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
      {Width >= 1100 ? (
        <Div
          style={{
            color: "#fff",
            background: "linear-gradient(to bottom, #2b44ff, #0c0233)",
          }}
        >
          <Flex justifyCenter>
            <div style={{ padding: "2em", width: "70%" }}>
              <Title style={{ textAlign: "center" }}>
                Customizable Interface
              </Title>
              <Text style={{ textAlign: "center", fontSize: "1.2em" }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </Text>
              <Flex justifyBetween>
                <Hover>
                  <img
                    alt="Workspace"
                    src={Sample}
                    style={{ maxWidth: "130%", paddingRight: "5em" }}
                  />
                </Hover>
                <Hover>
                  <img
                    alt="Workspace"
                    src={Sample}
                    style={{ maxWidth: "130% ", paddingLeft: "5em" }}
                  />
                </Hover>
              </Flex>
            </div>
          </Flex>

          <Flex justifyCenter>
            <div style={{ padding: "2em", width: "70%" }}>
              <Title style={{ textAlign: "center" }}>
                Monitor working performance
              </Title>
              <Text style={{ textAlign: "center", fontSize: "1.2em" }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </Text>
            </div>
            <Hover>
              <img alt="Workspace" src={Sample} style={{ maxWidth: "70%" }} />
            </Hover>
          </Flex>
          <Flex justifyCenter>
            <Hover>
              <img alt="Workspace" src={Sample} style={{ maxWidth: "70%" }} />
            </Hover>
            <div style={{ padding: "2em", width: "70%" }}>
              <Title style={{ textAlign: "center" }}>Track working hours</Title>
              <Text style={{ textAlign: "center", fontSize: "1.2em" }}>
                Switch between colors and layouts to give the unique development
                environemt.
              </Text>
            </div>
          </Flex>
        </Div>
      ) : (
        <Div
          style={{
            color: "#fff",
            background: "linear-gradient(to bottom, #2b44ff, #0c0233)",
          }}
        >
          <Flex justifyCenter>
            <div style={{ padding: "1em" }}>
              <Title style={{ textAlign: "center" }}>
                Customizable Interface
              </Title>
              <Text style={{ textAlign: "center" }}>
                Switch between colors and layouts to create your unique working
                environemt environemt.
              </Text>
              <Flex justifyCenter>
                <Hover>
                  <img
                    alt="Workspace"
                    src={Sample}
                    style={{ maxWidth: "95%" }}
                  />
                </Hover>
              </Flex>
            </div>
          </Flex>
          <Flex justifyCenter>
            <div style={{ padding: "1em" }}>
              <Title style={{ textAlign: "center" }}>
                Monitor working performance
              </Title>
              <Text style={{ textAlign: "center" }}>
                Switch between colors and lyouts to give the unique development
                environemt.
              </Text>
              <Flex justifyCenter>
                <Hover>
                  <img
                    alt="Workspace"
                    src={Sample}
                    style={{ maxWidth: "95%" }}
                  />
                </Hover>
              </Flex>
            </div>
          </Flex>
          <Flex justifyCenter>
            <div style={{ padding: "1em" }}>
              <Title style={{ textAlign: "center" }}>
                Track working hours.
              </Title>
              <Text style={{ textAlign: "center" }}>
                Switch between colors and lyouts to give the unique development
                environemt.
              </Text>
              <Flex justifyCenter>
                <Hover>
                  <img
                    alt="Workspace"
                    src={Sample}
                    style={{ maxWidth: "95%" }}
                  />
                </Hover>
              </Flex>
            </div>
          </Flex>
        </Div>
      )}
    </div>
  )
}

export default Features
