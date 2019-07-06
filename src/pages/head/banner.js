import React from "react"
import styled from "styled-components"

import Header from "./header"

const Banner = () => {
  const Contain = {
  background:' #F0B65F '  ,
  color : '#fff'
  }

  return (
    <div style={Contain}> 
      <Header />

      <div
        style={{
          padding: "5em",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}> Productivity Centralized. </h2>
      </div>
    </div>
  )
}

export default Banner
