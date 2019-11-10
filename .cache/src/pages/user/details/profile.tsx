import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Image, Tab, Tabs } from "react-bootstrap"
import { MdHistory } from "react-icons/md"

import Layout from "../../../components/layout"
import Header from "../../head/header"
import ProfileInfo from "./profileInfo"

import Activity from "./activity"
import Billing from "./billing"

const profile = () => {
  const Body = styled.div`
    padding: 0.5em;
  `
  const Details = styled.div`
    padding-top: 20px;
  `

  const List: Array = [{ name: "" }, { name: "" }, { name: "" }]

  return (
    <Layout>
      <Header style={false} />

      <Body>
        <ProfileInfo />

        <Tabs
          style={{ textAlign: "center" }}
          defaultActiveKey="profile"
          id="uncontrolled-tab-exampale"
        >
          <Tab eventKey="Activity" title="Activity">
            <Activity />
          </Tab>
          <Tab eventKey="Stats" title="Stats">
            <p> second Tab </p>
          </Tab>
          <Tab eventKey="billing" title="Billing">
            <Billing />
          </Tab>
        </Tabs>
      </Body>
    </Layout>
  )
}

export default profile
