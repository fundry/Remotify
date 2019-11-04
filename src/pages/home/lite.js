import React, { useState } from "react"
import styled from "styled-components"
import posed from "react-pose"
import { DiTrello, DiGithub, DiWordpress, DiCloud9 } from "react-icons/di"
import { FiArrowRight, FiCodesandbox } from "react-icons/fi"
import Flex from "styled-flex-component"
import { Link } from "gatsby"
import media from "styled-media-query"

const Lite = () => {
  const Body = styled.div`
    padding: 1em;
  `

  const Title = styled.h3`
    font-weight: bold;
    color: #361f94;
    ${media.lessThan("medium")`
      font-size: 1.55em;
    `};
  `

  const Header = styled.div`
    text-align: center;
    color: #0b33a2;
  `

  const Text = styled.p`
    text-align: center;
    font-size: 1.2em;
    ${media.lessThan("medium")`
        font-size: 1em;
    `};
  `

  const Card = styled.div({
    height: "13vh",
    padding: "1em",
    paddingTop: "2em",
    width: "9em",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px grey",
    background: "black",
    color: "white",
    cursor: "pointer",
  })

  const Button = styled.button`
    background: transparent;
    border: 1.3px solid #0e2f5a;
    border-radius: 2px;
    color: #361f94;
    padding: 0.1em 2em;
    padding-top: 10px;
    :hover {
      border: 1.5px solid #0e2f5a;
    }
  `

  const Discover = styled.p`
    font-size: 1.15em;
    padding-right: 5px;
  `

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  })

  const Apps = styled.div({
    ...autoGrid(130, 7),
    padding: Width >= 550 ? "1.25em" : "0.70em",
    marginLeft: Width >= 550 ? "1.50em" : "0.50em",
  })

  const Bounce = posed.div({
    hoverable: true,
    init: {
      scale: 0.9,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      textAlign: "center",
    },
    hover: {
      scale: 1,
    },
    press: {
      scale: 1.1,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
  })

  return (
    <Body>
      <Header>
        <Title> Installable Lite Apps </Title>
        <Text>
          Your working tools made installable within the Remotify environment.{" "}
        </Text>

        <Link to="/home/addLite">
          <Button>
            <Flex justifyAround>
              <Discover> Discover Apps </Discover>
              <FiArrowRight style={{ fontSize: "1.5em" }} />
            </Flex>
          </Button>
        </Link>
      </Header>

      {Width >= 1300 ? (
        <Flex justifyAround>
          <Bounce>
            <Card>
              <DiTrello
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiGithub
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiWordpress
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiCloud9
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <FiCodesandbox
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiTrello
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiCloud9
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <FiCodesandbox
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiTrello
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>
        </Flex>
      ) : (
        <Apps>
          <Bounce>
            <Card>
              <DiTrello
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiGithub
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiWordpress
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiCloud9
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <FiCodesandbox
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiTrello
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiCloud9
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <FiCodesandbox
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>

          <Bounce>
            <Card>
              <DiTrello
                style={{ fontSize: Width >= 550 ? "3.5em" : "2.7em" }}
              />
            </Card>
          </Bounce>
        </Apps>
      )}
    </Body>
  )
}

export default Lite
