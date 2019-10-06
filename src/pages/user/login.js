import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Flex from 'styled-flex-component';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';

import Layout from '../../components/layout';
import Header from '../head/header';
import { Login } from '../../data/mutations';

const login = () => {
  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #fff;
    padding: 0.50em 3em;
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
      .max(24, 'More than 24')
      .required('must have a name '),
    password: Yup.string()
      .min(5, 'Not less than 5')
      .max(37, 'More than 37')
      .required('must have a name '),
  });

  const [loginOrganization, { error, loading, data }] = useMutation(Login);
  console.log(error, loading, data);

  return (
    <Layout>
      <Header style={false} />

      <br />
      <Flex justifyCenter>
        <Formik
          initialValues={{ email: '', name: '', password: '' }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({ isSubmitting, handleChange, handleBlur, values, errors }) => (
            <Form>
              <br />
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
                <Link to="/user/profile">
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
                </Link>{' '}
                <br />
                <br />
              </div>{' '}
            </Form>
          )}
        </Formik>
      </Flex>
    </Layout>
  );
};

export default login;
