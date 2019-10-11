import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Link } from 'gatsby';
import { useMutation } from '@apollo/react-hooks';

import Charts from './chart';
import Header from '../head/header';
import Layout from '../../components/layout';
import { CreateTeam } from '../../data/mutations';
import Department from './details/departments';

const profile = () => {
  const Head = styled.div({
    padding: '0.5em',
    width: '100%',
    background: '#361f94',
    color: 'white',
  });

  const Button = styled.button`
    background: #fff;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #361f94;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      color: #fff;
      background: transparent;
    }
  `;

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const [Create, setCreate] = useState(false);
  const [Chart, setChart] = useState(false);
  const [Error, setError] = useState(false);

  const createButton = () => {
    setCreate(false);
  };

  const [createDepartment, { loading }] = useMutation(CreateTeam);

  const refDepartment = useRef('');

  return (
    <Layout>
      <Header style={false} />
      <div>
        <Head
          style={{
            boxShadow: '0px 3px 5px grey',
          }}
        >
          <Flex justifyBetween>
            {!Create ? (
              <Button onClick={() => setCreate(true)}>
                <p>Create Department </p>
              </Button>
            ) : (
              <div>
                <Flex>
                  <input
                    style={{
                      background: 'transparent',
                      color: 'white',
                      border: '0.7px solid white ',
                      padding: '0.5em',
                      paddingLeft: '2em',
                      width: '20em',
                    }}
                    ref={refDepartment}
                    placeholder="Department Name"
                  />

                  <Button
                    onClick={() => {
                      createButton();
                      createDepartment({
                        variables: {
                          name: refDepartment.current.value,
                        },
                      });
                    }}
                  >
                    Create{' '}
                  </Button>
                </Flex>
              </div>
            )}

            <p> Departments / Profile </p>

            <Hover>
              {!Chart ? (
                <div
                  onClick={() => {
                    setChart(true);
                  }}
                >
                  <p> Charts View </p>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setChart(false);
                  }}
                >
                  <p> Board View </p>
                </div>
              )}
            </Hover>
          </Flex>
        </Head>
        <br />
        <br />
        <Flex justifyCenter>
          <Link to="./user/workers">
            <Hover>
              <h2> Cretella</h2>
              <h5 style={{ textAlign: 'center' }}> 205 workers</h5>
            </Hover>
          </Link>{' '}
        </Flex>
        <h4 style={{ textAlign: 'center' }}> {Error} </h4>
        {/* DEPARTMENT AND CHART BOARD CONTROLLER   */}
        <div>
          {!Chart ? (
            <Department />
          ) : (
            <div>
              <Charts />
            </div>
          )}
        </div>
        <br />{' '}
      </div>

      {/*  END OF CONTROLLER */}
    </Layout>
  );
};

export default profile;
