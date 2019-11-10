import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import media from "styled-media-query"
import Sample from "../svg/scheduler.svg"

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
      <div style={{ padding: "1em" }}>
        <Flex justifyCenter>
          <div>
            <Flex justifyCenter>
              <img
                src={Sample}
                style={{ textAlign: "center", maxWidth: "90%" }}
                alt="ilustration"
              />
            </Flex>

            <Head
              style={{
                fontWeight: "normal",
                color: "#0b33a2",
                textAlign: "center",
              }}
            >
              Organize , Plan Your working hours.
            </Head>
          </div>
        </Flex>
      </div>

      <br />
    </Div>
  )
}

export default Benefits
