import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"
// import { Carousel } from "react-bootstrap"
import { Carousel } from "react-bootstrap"

import Sample from "../svg/console_sample.svg"

const Benefits = () => {
  const Div = styled.div`
      background : #fff
      padding : 0.5em
      margin-top : 2%
    `

  const Head = styled.h3`
    padding-right: 20% ${media.lessThan("medium")`
      font-size: 1.4em
      padding-left: 10%
    `};
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
    <Div>
      <br />

      <Head
        style={{
          textAlign: "left",
          fontWeight: "bold",
          color: "#0b33a2",
        }}
      >
        Organize , Plan <br /> Your working hours .
      </Head>

      <div style={{ padding: "1em" }}>
        {Width >= 470 ? (
          <Flex justifyCenter>
            <Carousel>
              <Carousel.Item>
                <Flex justifyCenter>
                  <img
                    src={Sample}
                    style={{ textAlign: "center", maxWidth: "60%" }}
                    alt="ilustration"
                  />
                </Flex>
              </Carousel.Item>

              <Carousel.Item>
                <Flex justifyCenter>
                  <img
                    src={Sample}
                    style={{ textAlign: "center", maxWidth: "60%" }}
                    alt="ilustration"
                  />
                </Flex>
              </Carousel.Item>

              <Carousel.Item>
                <Flex justifyCenter>
                  <img
                    src={Sample}
                    style={{ textAlign: "center", maxWidth: "60%" }}
                    alt="ilustration"
                  />
                </Flex>
              </Carousel.Item>
            </Carousel>
          </Flex>
        ) : (
          <Flex justifyCenter>
            <Carousel>
              <Carousel.Item>
                <Flex justifyCenter>
                  <img
                    src={Sample}
                    style={{ textAlign: "center", maxWidth: "90%" }}
                    alt="ilustration"
                  />
                </Flex>
              </Carousel.Item>

              <Carousel.Item>
                <Flex justifyCenter>
                  <img
                    src={Sample}
                    style={{ textAlign: "center", maxWidth: "90%" }}
                    alt="ilustration"
                  />
                </Flex>
              </Carousel.Item>

              <Carousel.Item>
                <Flex justifyCenter>
                  <img
                    src={Sample}
                    style={{ textAlign: "center", maxWidth: "90%" }}
                    alt="ilustration"
                  />
                </Flex>
              </Carousel.Item>
            </Carousel>
          </Flex>
        )}
      </div>

      <br />
    </Div>
  )
}

export default Benefits
