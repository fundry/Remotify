import React from "react"
import Flex from "styled-flex-component"

import Layout from "../../components/layout"

import Overview from "./overview"
import Official from "./official"
import Private from "./private"

const Main = () => {
  return (
    <Layout>
      <p style={{ textAlign: "center" }}> Main page </p>

      <Flex>
        <Overview />
        <Official />
        <Private />
      </Flex>
    </Layout>
  )
}

export default Main
