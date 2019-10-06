import { useMutation } from '@apollo/react-hooks';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';
import { Planet } from 'react-kawaii';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import * as Yup from 'yup';

import Layout from '../../components/layout';
import { Organization } from '../../data/mutations';
import Header from '../head/header';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Not less than 3')
    .max(24, 'More than 24')
    .required('must have a name '),
  email: Yup.string()
    .email('Must be an email')
    .max(37, 'More than 37')
    .required('must have a name '),
});

const form = () => {
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
      cursor: pointer;
    }
  `;

  const [Email, sentEmail] = useState(false);

  const [Mail, addMail] = useState('');

  const [createOrganization, { error, loading, data }] = useMutation(
    Organization
  );
  console.log(error, loading, data);

  return (
    <Layout>
      <Header style={false} />

      <br />

      <div>
        {!Email ? (
          <Flex justifyCenter>
            <div style={{ padding: '1em' }}>
              <h2 style={{ textAlign: 'center' }}>
                Create <b> Organization </b>
              </h2>
              <hr />
              <Formik
                initialValues={{ email: '', name: '' }}
                validationSchema={validation}
                onSubmit={(values, { setSubmitting }) => {
                  addMail(values.email);
                }}
              >
                {({
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                }) => (
                  <Form>
                    <div>
                      <label htmlFor="name" />
                      <h5> Team Name </h5>
                      <input
                        style={{
                          height: '7.5vh',
                          width: '30em',
                          borderRadius: '5px',
                          paddingLeft: '10px',
                          border: !errors.name
                            ? '1px solid  #361f94 '
                            : '2.5px solid  red ',
                        }}
                        id="name"
                        type="text"
                        value={values.name}
                        placeholder="dragonblade"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <br />
                    <br />
                    <div>
                      <h5> Team Email Address </h5>
                      <label htmlFor="email" />
                      <input
                        style={{
                          height: '7.5vh',
                          width: '30em',
                          borderRadius: '5px',
                          paddingLeft: '10px',
                          border: !errors.email
                            ? '1px solid  #361f94 '
                            : '2.5px solid  red ',
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
                    <br />
                    <div>
                      <h5> Administrative Address (optional ) </h5>
                      <input
                        style={{
                          height: '7.5vh',
                          width: '30em',
                          borderRadius: '5px',
                          paddingLeft: '10px',
                          border: '1px solid  #361f94 ',
                        }}
                        type="email"
                        placeholder="admin@email.com"
                      />
                    </div>
                    <br />
                    {!Email ? (
                      <Flex justifyCenter>
                        <Button
                          onClick={() => {
                            sentEmail(true);
                            createOrganization({
                              variables: {
                                name: values.name,
                                password: values.name,
                                email: values.email,
                                description: values.name,
                                country: values.name,
                                state: values.name,
                              },
                            });
                          }}
                          disabled={isSubmitting}
                          style={{
                            background: !errors.name
                              ? '#361f94'
                              : 'transparent',
                          }}
                        >
                          <p> Continue </p>
                        </Button>
                      </Flex>
                    ) : null}
                  </Form>
                )}
              </Formik>
            </div>
          </Flex>
        ) : (
          <Flex justifyCenter>
            <br />
            <br />
            <Card
              style={{
                padding: '2em 4em 3em',
                boxShadow: '0px 7px 7px grey',
              }}
            >
              <div>
                <Flex justifyCenter>
                  <Planet style={{ textAlign: 'center' }} />
                </Flex>

                <br />
                <Flex justifyCenter>
                  <div style={{ padding: '1em', textAlign: 'center' }}>
                    <FiCheck style={{ fontSize: '3em' }} />
                    <div style={{ paddingRight: '10px', paddingTop: '3px' }}>
                      <h4 style={{ textAlign: 'center' }}>
                        An Email has been sent to <b> {Mail} </b>
                        . <br />
                        Click the confirmation link to begin with Remotify
                      </h4>
                    </div>

                    <br />
                    <Flex justifyCenter>
                      <div>
                        <Button>Verify</Button>

                        <br />
                        <br />
                        <br />
                        <div>
                          <Flex>
                            <h5 style={{ paddingRight: '20px' }}>
                              {" Haven't recieved it?"}
                            </h5>
                            <a href="github.com/vickywane"> Resend Mail </a>
                          </Flex>
                        </div>
                      </div>
                    </Flex>
                  </div>
                </Flex>
              </div>{' '}
              <br />
            </Card>
          </Flex>
        )}
      </div>
    </Layout>
  );
};

export default form;
