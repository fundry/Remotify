import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Helmet } from 'react-helmet';
import { Card } from 'react-bootstrap';
import { Planet } from 'react-kawaii';
import { FiCheck } from 'react-icons/fi';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Layout from '../../components/layout';
import { Group } from '../../data/mutations';
import config from '../../data/config';
import Header from '../head/header';
import { Organization } from '../../data/mutations';

const validation = Yup.object().shape({
  email: Yup.string().email('invalid email address'),
});

const form = (props) => {
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

  const [Text, addText] = useState('');

  const [Mail, addMail] = useState('');

  const [Validity, setValidity] = useState(true);

  return (
    <Layout>
      <Header style={false} />

      <br />

      <Mutation mutation={Organization}>
        {(createOrganization) => (
          <div>
            {!Email ? (
              <Flex justifyCenter>
                <div style={{ padding: '1em' }}>
                  <h2 style={{ textAlign: 'center' }}>
                    Create <b> Organization </b>{' '}
                  </h2>
                  <hr />
                  <Formik
                    initialValues={{ email: '', name: '' }}
                    validationSchema={validation}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(values);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div>
                          <h5> Team Name</h5>
                          <input
                            style={{
                              height: '7.5vh',
                              width: '30em',
                              borderRadius: '5px',
                              paddingLeft: '10px',
                              border: '1px solid  #361f94 ',
                            }}
                            type="text"
                            placeholder="dragonblade"
                            onChange={(e) => {
                              addText(e.target.value);
                            }}
                          />
                        </div>
                        <br />
                        <br />
                        <div>
                          <h5> Team Email Address </h5>
                          <input
                            style={{
                              height: '7.5vh',
                              width: '30em',
                              borderRadius: '5px',
                              paddingLeft: '10px',
                              border: '1px solid  #361f94 ',
                            }}
                            onChange={(e) => {
                              addMail(e.target.value);
                            }}
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
                                    name: Text,
                                    password: Text,
                                    email: Text,
                                    description: Text,
                                    country: Text,
                                    state: Text,
                                  },
                                });
                              }}
                              disabled={isSubmitting}
                              style={{
                                filter: Validity
                                  ? 'grayscale(0.01%) blur(0.01px)'
                                  : 'grayscale(0%) blur(0px)',
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
                    padding: '2em 5em 4em',
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
                        <div
                          style={{ paddingRight: '10px', paddingTop: '3px' }}
                        >
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
                                  {' '}
                                  {" Haven't recieved it?"}{' '}
                                </h5>
                                <a href="github.com/vickywane"> Resend Mail </a>
                              </Flex>
                            </div>
                          </div>
                        </Flex>
                      </div>
                    </Flex>
                  </div>
                </Card>
              </Flex>
            )}
          </div>
        )}
      </Mutation>
    </Layout>
  );
};

export default form;
