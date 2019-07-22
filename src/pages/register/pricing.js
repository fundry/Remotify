import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FiCheck } from 'react-icons/fi';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';

const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
});

const Cards = styled.div({
  ...autoGrid(350, 20),
  padding: '6em',
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
  }
`;

const Div = {
  color: '#0C0233',
  padding: ' 1em',
};

const register = () => {
  return (
    <div>
      <div style={Div}>
        <Flex justifyCenter>
          <div style={{ padding: '2em', width: '80%' }}>
            <h2 style={{ textAlign: 'center' , fontWeight : 'bold' }}>Pricing.</h2>

            <code>
              <p
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontSize: '1.2em',
                }}
              >
                Remotify is currently in a Beta release and would remain free
                untill a stable release.
              </p>
            </code>
            <p style={{ textAlign: 'center', fontSize: '1.5em' }}>
              Our Flexible Pricing models are designed to give you the same
              quality of your money.
            </p>
          </div>
        </Flex>

        <Flex justifyCenter>
          <Link to="/register/create">
            <Button> Get Started (Free) </Button>
          </Link>
        </Flex>
      </div>

      <Cards>
        <Card
          style={{
            margin: '1em',
            boxShadow: '0px 5px 5px grey',
            borderRadius: '10px',
          }}
        >
          <Card.Header
            style={{
              textAlign: 'center',
              backgroundColor: 'blue',
              color: '#fff',
              padding: '2em',
              borderRadius: '10px',
            }}
          >
            <h3 style={{ fontWeight: 'bold' }}> Group </h3>
            <h5> 000$ </h5>
          </Card.Header>
          <Card.Body
            style={{
              color: '#000',
              padding: '1em',
            }}
          >
            <ul>
              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Up to 4 users .{' '}
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Window , Linux, macOs
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Unlimited Acess Duration
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Unlimited storage space
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    All features
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Email Support
                  </p>
                </Flex>
              </ol>
            </ul>

            <Flex justifyCenter>
              <Button> Purchase Remote Acess </Button>
            </Flex>
            <br />
          </Card.Body>
        </Card>

        <Card
          style={{
            margin: '1em',
            boxShadow: '0px 5px 5px grey',
            borderRadius: '10px',
          }}
        >
          <Card.Header
            style={{
              textAlign: 'center',
              backgroundColor: 'blue',
              color: '#fff',
              padding: '2em',
              borderRadius: '10px',
            }}
          >
            <h3 style={{ fontWeight: 'bold' }}> Team </h3>
            <h5> 000$ </h5>
          </Card.Header>
          <Card.Body
            style={{
              color: '#000',
              padding: '1em',
            }}
          >
            <ul>
              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Up to 10 users .{' '}
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Window , Linux, macOs
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Unlimited Acess Duration
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Unlimited storage space
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    All features
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Email Support
                  </p>
                </Flex>
              </ol>
            </ul>

            <Flex justifyCenter>
              <Button> Purchase Team Acess </Button>
            </Flex>
            <br />
          </Card.Body>
        </Card>

        <Card
          style={{
            margin: '1em',
            boxShadow: '0px 5px 5px grey',
            borderRadius: '10px',
          }}
        >
          <Card.Header
            style={{
              textAlign: 'center',
              backgroundColor: 'blue',
              color: '#fff',
              padding: '2em',
              borderRadius: '10px',
            }}
          >
            <h3 style={{ fontWeight: 'bold' }}> Enterprise </h3>
            <h5> 000$ </h5>
          </Card.Header>
          <Card.Body
            style={{
              color: '#000',
              padding: '1em',
            }}
          >
            <ul>
              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Up to 10 users .{' '}
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Window , Linux, macOs
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Unlimited Acess Duration
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Unlimited storage space
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    All features
                  </p>
                </Flex>
              </ol>

              <ol style={{ padding: '0.5em' }}>
                <Flex>
                  <FiCheck
                    style={{
                      fontSize: '2em',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '1.5em',
                      paddingLeft: '20px',
                    }}
                  >
                    Email Support
                  </p>
                </Flex>
              </ol>
            </ul>

            <Flex justifyCenter>
              <Button> Purchase Remote Acess </Button>
            </Flex>
            <br />
          </Card.Body>
        </Card>
      </Cards>
    </div>
  );
};

export default register;
