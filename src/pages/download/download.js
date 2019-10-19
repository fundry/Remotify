import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiDownload } from "react-icons/fi"

import Header from "../head/header"
import Updates from "./updates"
import Layout from "../../components/layout"

import Apple from "../../images/apple.svg"
import Win from "../../images/win.svg"
import Mint from "../../images/mint.svg"

const download = () => {
  const Title = styled.h4({})

  const Text = styled.p({ fontSize: "1.3em" })

  const Windows = styled.div({
    textAlign: "center",
    padding: "1em",
  })

  const Mac = styled.div({
    textAlign: "center",
    padding: "1em",
  })

  const Linux = styled.div({
    textAlign: "center",

    padding: "1em",
  })
  const Head = styled.div({
    padding: "1.2em",
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
    backgroundColor: "#f2f5ff",
    boxShadow: "0px 3px 5px grey",
  })

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border: 1px solid #0e2f5a;
    border-radius: 4px;
    color: #fff;
    margin: 0 1em;
    padding: 1em 2.7em;
    :hover {
      font-size: 1em;
    }
  `

  const Download = styled.button`
    background: transparent;
    text-align: right;
    border: 2px solid #0e2f5a;
    border-radius: 4px;
    color: #000;
    margin: 0 1em;
    padding: 1em 3em;
    outline : none
    :hover {
      transition: 24s ease-in-out
      font-size: 1em;
      cursor: pointer;
    }
  `

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
    <Layout>
      <Header style={"download"} />
      <div>
        <Head>
          <Text>
            Remotify Desktop has cross platform support to enable every one
            within the team integrate with their preferred machine type.
          </Text>

          <div>
            <p> Version 0.0.1 updated 10 days ago.</p>

            <Button onClick={() => {}}>View ChangeLog</Button>
          </div>
        </Head>

        <br />

        {Width >= 770 ? (
          <Flex justifyBetween>
            <br />
            <Windows>
              <img alt="windows" src={Win} style={{ maxWidth: "15%" }} />
              <Title> Windows </Title>
              <Download>
                <Flex>
                  <FiDownload
                    style={{
                      color: "black",
                      fontSize: "2em",
                      paddingTop: "1px",
                      paddingRight: "5px",
                    }}
                  />
                  <p style={{ paddingTop: "5px" }}> Windows</p>
                </Flex>{" "}
              </Download>
            </Windows>
            <Mac>
              <img alt="Apple-macOs" src={Apple} style={{ maxWidth: "15%" }} />
              <Title> MacOs </Title>
              <Download>
                <Flex>
                  <FiDownload
                    style={{
                      color: "black",
                      fontSize: "2em",
                      paddingTop: "1px",
                      paddingRight: "5px",
                    }}
                  />
                  <p style={{ paddingTop: "5px" }}> Windows</p>
                </Flex>{" "}
              </Download>
            </Mac>
            <Linux>
              <img alt="linux-mint" src={Mint} style={{ maxWidth: "15%" }} />
              <Title> Linux </Title>
              <Download>
                <Flex>
                  <FiDownload
                    style={{
                      color: "black",
                      fontSize: "2em",
                      paddingTop: "1px",
                      paddingRight: "5px",
                    }}
                  />
                  <p style={{ paddingTop: "5px" }}> Windows</p>
                </Flex>{" "}
              </Download>
            </Linux>{" "}
          </Flex>
        ) : (
          <Flex column>
            <br />
            <Windows>
              <img alt="windows" src={Win} style={{ maxWidth: "15%" }} />
              <Title> Windows </Title>
              <Download>
                <Flex>
                  <FiDownload
                    style={{
                      color: "black",
                      fontSize: "2em",
                      paddingTop: "1px",
                      paddingRight: "5px",
                    }}
                  />
                  <p style={{ paddingTop: "5px" }}> Windows</p>
                </Flex>{" "}
              </Download>
            </Windows>
            <Mac>
              <img alt="Apple-macOs" src={Apple} style={{ maxWidth: "15%" }} />
              <Title> MacOs </Title>
              <Download>
                <Flex>
                  <FiDownload
                    style={{
                      color: "black",
                      fontSize: "2em",
                      paddingTop: "1px",
                      paddingRight: "5px",
                    }}
                  />
                  <p style={{ paddingTop: "5px" }}> Windows</p>
                </Flex>{" "}
              </Download>
            </Mac>
            <Linux>
              <img alt="linux-mint" src={Mint} style={{ maxWidth: "15%" }} />
              <Title> Linux </Title>
              <Download>
                <Flex>
                  <FiDownload
                    style={{
                      color: "black",
                      fontSize: "2em",
                      paddingTop: "1px",
                      paddingRight: "5px",
                    }}
                  />
                  <p style={{ paddingTop: "5px" }}> Windows</p>
                </Flex>{" "}
              </Download>
            </Linux>{" "}
          </Flex>
        )}

        <Updates />
      </div>
    </Layout>
  )
}

export default download
