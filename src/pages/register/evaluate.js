import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import * as Yup from "yup"
import { Formik } from "formik"

import Header from "../head/header"
import Layout from "../../components/layout"

const Evaluate = () => {
  const Button2 = styled.button`
    background: transparent;
    text-align: right;
    border: 1px solid #0e2f5a;
    border-radius: 5px;
    color: #361f94;
    margin: 0 1em;
    font-size: 1em;
    padding: 0.7em 2.2em;
    :hover {
      cursor: pointer;
    }
  `

  const Button3 = styled.button`
    background: transparent;
    text-align: right;
    border: 1px solid #0e2f5a;
    border-radius: 5px;
    color: #361f94;
    margin: 0 1em;
    font-size: 1em;
    padding: 0.7em 2.2em;
    :hover {
      cursor: pointer;
    }
  `

  const Submit = styled.button`
    background: #0e2f5a;
    text-align: right;
    border: 1px solid #0e2f5a;
    border-radius: 5px;
    color: #fff;
    margin: 0 1em;
    font-size: 1.1em;
    padding: 1em 3em;
    :hover {
      cursor: pointer;
    }
  `

  const Text = styled.p({
    textAlign: "center",
    padding: "0.5em",
    fontSize: "1.2em",
  })

  const Form = styled.form`
    padding: 1em;
  `

  const [Evaluation, setEvaluation] = useState(false)
  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Not less than 3")
      .max(24, "More than 24")
      .required("must have a name "),
    email: Yup.string()
      .email("Must be an email")
      .max(37, "More than 37")
      .required("must have a name "),
    password: Yup.string()
      .max(37, "More than 37")
      .min(5, "must have a name "),
  })

  return (
    <Layout>
      <Header style={false} />

      <div>
        <h3 style={{ textAlign: "center" }}> Remotify Evaluation </h3>

        <Text>
          Test run and evaluate Remotify to see if it fits your team needs for
          14days .{" "}
        </Text>

        {!Evaluation ? (
          <Button3
            onClick={() => {
              setEvaluation(true)
            }}
          >
            Begin Evaluation.
          </Button3>
        ) : (
          <Formik
            initialValues={{ email: "", name: "", password: "" }}
            validationSchema={validation}
          >
            {({ handleChange, handleBlur, values, errors }) => (
              <Form>
                <div>
                  <input
                    style={{
                      height: "7.5vh",
                      width: "30em",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                      border: !errors.name
                        ? "1px solid  #361f94 "
                        : "2.5px solid  red ",
                    }}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="name"
                    type="text"
                    placeholder="Organization Name"
                  />
                </div>
                <br />

                <div>
                  <input
                    style={{
                      height: "7.5vh",
                      width: "30em",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                      border: !errors.email
                        ? "1px solid  #361f94 "
                        : "2.5px solid  red ",
                    }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    type="email"
                    placeholder="team@email.com"
                  />
                </div>
                <br />

                <div>
                  <input
                    style={{
                      height: "7.5vh",
                      width: "30em",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                      border: !errors.password
                        ? "1px solid  #361f94 "
                        : "2.5px solid  red ",
                    }}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <br />

                <Flex justifyCenter>
                  <Submit> Submit </Submit>
                </Flex>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </Layout>
  )
}

export default Evaluate
