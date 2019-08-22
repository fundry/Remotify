import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import posed from 'react-pose';
import { Link } from 'gatsby';
import { FiX } from 'react-icons/fi';

import Charts from './chart';
import Header from '../head/header';
import { Modal } from 'react-bootstrap';
import Layout from '../../components/layout';

const profile = () => {
  const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
  });

  const Cards = styled.div({
    ...autoGrid(220, 20),
    padding: '2em',
  });

  const Card = styled.div({
    height: '20vh',
    padding: '1em',
    paddingTop: '2.5em',
    width: '12em',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px grey',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
  });

  const Head = styled.div({
    padding: '0.5em',
    width: '100%',
    background: '#361f94',
    color: 'white',
  });

  const Bounce = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      textAlign: 'center',
    },
    hover: {
      scale: 1.1,
    },
    press: {
      scale: 1.1,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
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

  const ModalHead = styled.div({
    background: 'black',
    padding: '0.5em',
    color: '#fff',
  });

  const ModalBody = styled.div({
    padding: '0.5em',
  });

  const Hover = styled.div({
    cursor: 'pointer',
  });

  const [Create, setCreate] = useState(false);
  const [Chart, setChart] = useState(false);
  const [teamModal, setteamModal] = useState(false);

  const createButton = () => {
    setCreate(false);
  };

  return (
    <Layout>
      <Header style={false} />
      <Head
        style={{
          boxShadow: '0px 3px 5px grey',
        }}
      >
        <Flex justifyBetween>
          {!Create ? (
            <Button onClick={() => setCreate(true)}>
              <p>Create Team </p>
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
                  placeholder="Team Name"
                />
                <Button
                  onClick={() => {
                    createButton();
                  }}
                >
                  Create{' '}
                </Button>
              </Flex>
            </div>
          )}

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

      <Modal
        show={teamModal}
        onhide={() => {
          setteamModal(false);
        }}
        style={{
          boxShadow: '0px 4px 6px grey',
        }}
      >
        <ModalHead>
          <Flex justifyBetween>
            <p> Frontend </p>

            <Hover
              onClick={() => {
                setteamModal(false);
              }}
            >
              <FiX />
            </Hover>
          </Flex>
        </ModalHead>

        <ModalBody>
          <p> Team Details </p>
        </ModalBody>
      </Modal>

      <Flex justifyCenter>
        <Link to="./user/workers">
          <Hover>
            <h2> Creatella </h2>
            <h5 style={{textAlign  : 'center'}} > 205 workers</h5>
          </Hover>
        </Link>
      </Flex>

      <div>
        {!Chart ? (
          <Cards>
            <Bounce
              onClick={() => {
                setteamModal(true);
              }}
            >
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h5> Frontend Team </h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Bounce>

            <Bounce>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h5> Frontend Team </h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Bounce>

            <Bounce>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h5> Frontend Team </h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Bounce>

            <Bounce>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h5> Frontend Team </h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Bounce>

            <Bounce>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h5> Frontend Team </h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Bounce>

            <Bounce>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h5> Frontend Team </h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Bounce>
          </Cards>
        ) : (
          <div>
            <Charts />
          </div>
        )}
      </div>
      <br />
    </Layout>
  );
};

export default profile;
