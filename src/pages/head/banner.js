import React from "react"

import Header from "./header"
import { Query } from 'react-apollo'
import {Test}  from '../../data/queries'

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
      
        <Query query={Test}>
        {({ loading, error, data: { info } }) => {
          if (loading) return <p> loading </p>;
          if (error) return <p> error </p>;

          return <p> {info} </p>;
        }}
      </Query>
      </div>
    </div>
  )
}

export default Banner
