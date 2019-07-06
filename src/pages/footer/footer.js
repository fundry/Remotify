import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Icon } from "semantic-ui-react"

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

  return (
    <footer style={Div}>
      <div style={{ padding: "2%" }}>
        <Flex justifyAround>
          <div>
            <h5 style={{ marginTop: "1em", color: "#fff" }}> Remotify.Inc </h5>

            <Flex justifyCenter>
              <Icon name="facebook" color="blue" />
              <Icon name="twitter" color="blue" />
              <Icon name="github" color="black" />
            </Flex>
          </div>
          <Flex column>
            <p style={Head}> PRODUCT </p>
            <p style={Title}> Create Team  </p>
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

      <div
        style={{
          textAlign: "center",
          padding: "0.7%",
          backgroundColor: " #361f94",
          fontSize: "0.8em",
          color: "#fff",
        }}
      >
        <p>
          Copyright© {new Date().getFullYear()} , a subsidiary of the
          <a href="/"> Fundry Program </a>.
          <br /> <a href="/"> Terms of Service </a> or{" "}
          <a href="/"> Privacy Policies </a>{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
