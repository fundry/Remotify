import { useMutation } from '@apollo/react-hooks';
import { Form, Formik } from 'formik';
import React, { useState, useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Planet } from 'react-kawaii';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import * as Yup from 'yup';
import media from 'styled-media-query';

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

const Congrats = styled.h4`
  text-align: center;
  ${media.lessThan('medium')`
    font-size: 1.2em
`};
`;

const form = () => {
  const [Email, sentEmail] = useState(false);
  const refText = useRef('');
  const [Mail, addMail] = useState('');

  const [Width, setWidth] = useState(null);

  setTimeout(function() {
    setWidth(window.innerWidth);
  }, 1000);

  const handleResize = (value) => {
    setWidth(value);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize.bind(this));
    return () => window.removeEventListener('resize', handleResize.bind(this));
  }, []);

  const Input = styled.input({
    height: Width >= 500 ? '7.5vh' : '6vh',
    width: Width >= 500 ? '30em' : '20em',
    borderRadius: Width >= 500 ? '5px' : '2px',
    paddingLeft: '15px',
  });

  const [createOrganization, { error, loading, data }] = useMutation(
    Organization
  );

  console.log(process.env.GATSBY_FUNCTION_ENDPOINT + Email);

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
                      <Input
                        ref={refText}
                        style={{
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
                      <Input
                        style={{
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
                      <Input
                        style={{
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
                            addMail(refText.current.value);
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
                marginBottom: '20px',
                padding: Width >= 450 ? '1em 2em 2em' : '2em 4em 3em',
                boxShadow: '0px 7px 7px grey',
              }}
            >
              <div>
                <Flex justifyCenter>
                  <Planet size={Width >= 450 ? 150 : 100} />
                </Flex>

                <br />
                <Flex justifyCenter>
                  <div style={{ padding: '1em', textAlign: 'center' }}>
                    <div style={{ paddingRight: '10px', paddingTop: '3px' }}>
                      <Congrats style={{}}>
                        An Email has been sent to <b> {Mail} </b>
                        . <br />
                        Click the confirmation link to begin with Remotify
                      </Congrats>
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
              </div>
              <br />
              <br />
            </Card>
          </Flex>
        )}
      </div>
    </Layout>
  );
};

export default form;
