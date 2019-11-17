import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Flex from 'styled-flex-component';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';

import Layout from '../../components/layout';
import Header from '../head/header';
import { LoginOrganization } from '../../data/mutations';

import { StateProvider, StateContext } from '../../state/';

const login = () => {
  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #fff;
    padding: 0.5em 3em;
    font-size: 1.1em;
    &:hover {
      color: #361f94;
      background: transparent;
    }
  `;

  const Input = styled.input({
    height: '7.5vh',
    width: '30em',
    borderRadius: '5px',
    paddingLeft: '10px',
    border: '1px solid  #361f94 ',
  });

  const validation = Yup.object().shape({
    email: Yup.string()
      .email('Not email')
      .max(35, 'More than 24')
      .required('must have a name '),
    password: Yup.string()
      .min(5, 'Not less than 5')
      .max(37, 'More than 37')
      .required('must have a name '),
  });

  const [
    loginOrganization,
    { loading, data },
  ] = useMutation(LoginOrganization, {
    ignoreResults: false,
    onCompleted: (data) => {
      console.log(data.loginOrganization.token);
    },
    onError: (error) => {
      console.log(error, 'error has occurred');
    },
  });

  const response = data;

  console.log(response, loading);

  return (
    <StateProvider>
      <StateContext.Consumer>
        {({ authenticated, authenticate }) => (
          <Layout>
            <Header style={false} />
            <br />

            {loading ? <p> LOADING</p> : <p> NOT LOADING </p>}

            <Flex justifyCenter>
              <Formik
                initialValues={{
                  email: 'helpdesk.remotif@gmail.com',
                  name: 'Remotif',
                  password: 'Remotify01!',
                }}
                validationSchema={validation}
                onSubmit={(values, { setSubmitting }) => {}}
              >
                {({
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                }) => (
                  <Form>
                    <br />
                    <p> i am :{authenticated} </p>
                    <button
                      onClick={() => {
                        authenticate();
                      }}
                    >
                      Auth
                    </button>
                    <div>
                      <Input
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        type="name"
                        placeholder="Name"
                        style={{
                          border: !errors.name
                            ? '1px solid  #361f94 '
                            : '2px solid  red ',
                        }}
                      />
                    </div>
                    <br />
                    <div>
                      <Input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        type="email"
                        placeholder="Email"
                        style={{
                          border: !errors.email
                            ? '1px solid  #361f94 '
                            : '2px solid  red ',
                        }}
                      />
                    </div>
                    <br />
                    <div>
                      <Input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="password"
                        type="password"
                        placeholder="Password"
                        style={{
                          border: !errors.email
                            ? '1px solid  #361f94 '
                            : '2px solid  red ',
                        }}
                      />
                    </div>{' '}
                    <br />
                    <div style={{ textAlign: 'center' }}>
                      <Button
                        onClick={() => {
                          loginOrganization({
                            variables: {
                              name: values.name,
                              email: values.email,
                              password: values.password,
                            },
                          });
                        }}
                      >
                        {' '}
                        Login{' '}
                      </Button>

                      {/*  <Link to="/user/dashboard">
                        <Button
                          onClick={() => {
                            loginOrganization({
                              ignoreResults: false,

                              variables: {
                                name: values.name,
                                email: values.email,
                                password: values.password,
                              },
                            });
                          }}
                        >
                          {' '}
                          Login{' '}
                        </Button>
                        </Link>{' '} */}
                      <br />
                      <br />
                    </div>{' '}
                  </Form>
                )}
              </Formik>
            </Flex>
          </Layout>
        )}
      </StateContext.Consumer>
    </StateProvider>
  );
};

export default login;
