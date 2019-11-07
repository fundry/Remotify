import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import * as Yup from "yup"
import { Formik, Form } from "formik"

import Header from "../head/header"
import Layout from "../../components/layout"

const Intro = styled.div({
  fontSize: "1.2em",
  paddingLeft: "20px",
  padding: "1em",
})

const Div = styled.div({
  padding: "0.3em",
})

const Body = styled.div({
  padding: "1em",
})

const Button1 = styled.button`
  background: #361f94;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #fff;
  margin: 0 1em;
  font-size: 1.2em;
  padding: 0.7em 2.7em;
  :hover {
    cursor: pointer;
  }
`

const Text = styled.p({
  textAlign: "center",
  padding: "0.5em",
  fontSize: "1.2em",
})

const services = () => {
  const validation = Yup.object().shape({
    email: Yup.string()
      .email("Must be an email")
      .max(37, "More than 37")
      .required("must have a name "),
  })

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

  const Input = styled.input({
    height: Width >= 500 ? "8vh" : "6vh",
    width: Width >= 500 ? "32em" : "24em",
    borderRadius: Width >= 500 ? "3px" : "2px",
    paddingLeft: "15px",
    fontSize: Width >= 500 ? "1.2em" : "1.1em",
  })

  const Motto = styled.h1({
    fontWeight: "bold",
    fontSize: Width >= 600 ? "3em" : "2em",
  })

  const refEmail = useRef()

  return (
    <Layout>
      <Header style={false} />

      <Div>
        <Intro style={{ textAlign: "center" }}>
          <Motto style={{ wordSpacing: "0.7em" }}>Test. Review. Report.</Motto>
          <br />
        </Intro>

        <Body>
          <Intro>
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
            contest contest contest contest contest contest contest contest
          </Intro>
        </Body>

        <Formik initialValues={{ email: "" }} validationSchema={validation}>
          {({ isSubmitting, handleChange, handleBlur, values, errors }) => (
            <Form>
              <Flex justifyCenter>
                <label htmlFor="email" />
                <Input
                  ref={refEmail}
                  type="email"
                  style={{
                    border: !errors.name
                      ? "1px solid  #361f94 "
                      : "2.5px solid  red ",
                  }}
                  placeholder="Email Address"
                />
              </Flex>
              <br />
              <Flex justifyCenter>
                <Button1> Send Email </Button1>
              </Flex>
            </Form>
          )}
        </Formik>
      </Div>
    </Layout>
  )
}

export default services
