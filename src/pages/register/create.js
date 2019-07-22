import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import Header from '../head/header';
import { Helmet } from 'react-helmet';
import { Card } from 'react-bootstrap';
import { Planet } from 'react-kawaii';
import { FiCheck } from 'react-icons/fi';

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

  const _send = () => {
    sentEmail(true);
  };

  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
          />
        </Helmet>{' '}
      </div>
      <Header style={false} />

      <br />

      {!Email ? (
        <Flex justifyCenter>
          <div style={{ padding: '1em' }}>
            <h2 style={{ textAlign: 'center' }}>
              Create <b> Group Team </b>{' '}
            </h2>{' '}
            <hr />
            <form>
              <div>
                <h5> Team Name </h5>
                <input
                  style={{
                    height: '6vh',
                    width: '30em',
                    borderRadius: '3px',
                    paddingLeft: '10px',
                    border: '1px solid  #361f94 ',
                  }}
                  placeholder="DragonFire"
                  type="text"
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
            </form>
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
              <Planet />

              <br />
              <Flex justifyCenter>
                <div style={{ padding: '1em' }}>
                  <Flex>
                    <div style={{ paddingRight: '10px', paddingTop: '3px' }}>
                      <h4 style={{ textAlign: 'center' }}> Email Sent </h4>
                    </div>

                    <FiCheck style={{ fontSize: '2.2em' }} />
                  </Flex>
                  <br />
                  <Button>Verify</Button>
                </div>
              </Flex>
            </div>
          </Card>
        </Flex>
      )}

      {!Email ? (
        <Flex justifyCenter>
          <Button
            onClick={() => {
              _send();
            }}
          >
            <p> Continue </p>
          </Button>
        </Flex>
      ) : null}
    </div>
  );
};

export default form;
