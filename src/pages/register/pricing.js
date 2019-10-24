import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiCheck } from "react-icons/fi"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Cards = styled.div({
  ...autoGrid(350, 20),
  padding: "4em",
})

const Button = styled.button`
  background: #361f94;
  text-align: right;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #fff;
  margin: 0 1em;
  font-size: 1.1em;
  padding: 0.7em 2.5em;
  :hover {
    border: 2px solid #0e2f5a;
    font-size: 1em;
  }
`

const Div = {
  color: "#0C0233",
  padding: " 1em",
}

const Data = [
  {
    name: "Event",
    link: "/register/event.form",
  },
  {
    name: "Group",
    link: "/register/group.form",
  },
  {
    name: "Organization",
    link: "/register/organization.form",
  },
]

const Benefits = [
  {
    name: "Up to 4 users",
  },
  {
    name: "Window , Linux, macOs",
  },
  {
    name: "Unlimited Acess Duration",
  },
  {
    name: "Unlimited storage space",
  },
  {
    name: "All features",
  },
  {
    name: "Email Support",
  },
]

const Register = props => {
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
      <div style={Div}>
        <Flex justifyCenter>
          <div style={{ padding: "1em", width: "90%" }}>
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              Pricing.
            </h2>

            <code>
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                Remotify is currently in a Beta release and would remain free
                untill a stable release.
              </p>
            </code>
            <p style={{ textAlign: "center", fontSize: "1.5em" }}>
              Our Flexible Pricing models are designed to give you the same
              quality of your money.
            </p>
          </div>
        </Flex>

        <Flex justifyCenter>
          <Link to="/register/services">
            <Button> Get Started (Free) </Button>
          </Link>
        </Flex>
      </div>

      {Width >= 1200 ? (
        <div style={{ padding: "1.5em" }}>
          <Flex justifyAround>
            {Data.map(({ name, link }) => {
              return (
                <Card
                  style={{
                    margin: "0.5em",
                    boxShadow: "0px 5px 5px grey",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      textAlign: "center",
                      backgroundColor: "blue",
                      color: "#fff",
                      padding: "2em",
                      borderRadius: "10px",
                    }}
                  >
                    <h3 style={{ fontWeight: "bold" }}> {name} </h3>
                    <h5> 000$ </h5>
                  </Card.Header>
                  <Card.Body
                    style={{
                      color: "#000",
                      padding: "0.5em",
                    }}
                  >
                    <ul>
                      {Benefits.map(({ name }) => {
                        return (
                          <ol style={{ padding: "0.5em" }}>
                            <Flex>
                              <FiCheck
                                style={{
                                  fontSize: "2em",
                                }}
                              />
                              <p
                                style={{
                                  fontSize: "1.5em",
                                  paddingLeft: "15px",
                                }}
                              >
                                {name}
                              </p>
                            </Flex>
                          </ol>
                        )
                      })}
                    </ul>

                    <Link to={link}>
                      <Flex justifyCenter>
                        <Button> Purchase Remote Acess </Button>
                      </Flex>
                    </Link>
                    <br />
                  </Card.Body>
                </Card>
              )
            })}
          </Flex>
        </div>
      ) : (
        <Cards>
          {Data.map(({ name, link }) => {
            return (
              <Card
                style={{
                  margin: "0.5em",
                  boxShadow: "0px 5px 5px grey",
                  borderRadius: "10px",
                }}
              >
                <Card.Header
                  style={{
                    textAlign: "center",
                    backgroundColor: "blue",
                    color: "#fff",
                    padding: "2em",
                    borderRadius: "10px",
                  }}
                >
                  <h3 style={{ fontWeight: "bold" }}> {name} </h3>
                  <h5> 000$ </h5>
                </Card.Header>
                <Card.Body
                  style={{
                    color: "#000",
                    padding: "0.5em",
                  }}
                >
                  <ul>
                    {Benefits.map(({ name }) => {
                      return (
                        <ol style={{ padding: "0.5em" }}>
                          <Flex>
                            <FiCheck
                              style={{
                                fontSize: "2em",
                              }}
                            />
                            <p
                              style={{
                                fontSize: "1.5em",
                                paddingLeft: "15px",
                              }}
                            >
                              {name}
                            </p>
                          </Flex>
                        </ol>
                      )
                    })}
                  </ul>

                  <Link to={link}>
                    <Flex justifyCenter>
                      <Button> Purchase Remote Acess </Button>
                    </Flex>
                  </Link>
                  <br />
                </Card.Body>
              </Card>
            )
          })}
        </Cards>
      )}
    </div>
  )
}

export default Register
