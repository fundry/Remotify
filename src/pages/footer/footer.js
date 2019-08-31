import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { Icon } from 'semantic-ui-react';
import { Modal } from 'react-bootstrap';

const Footer = () => {
  const Div = {
    backgroundColor: '#5919AB',
    width: ' 100%',
  };

  const Head = {
    fontSize: '0.9em ',
    fontWeight: 'bold',
    color: '#fff',
  };

  const Title = {
    fontSize: '0.8em',
    color: '#fff',
  };

  const Testing = styled.div({
    textAlign: 'center',
    background: '#0e2f5a',
    padding: '1em',
    color: '#fff',
  });

  const Input = styled.input({
    padding: '1em',
    paddingLeft: '2em',
    width: '26em',
    border: '0px',
    background: 'transparent',
  });

  const Box = styled.div({
    border: '1px solid #361f94 ',
    borderRadius: '0px 15px 15px 0px',
    height: '7vh',
  });

  const Button = styled.button`
    background: #5919ab;
    border: 1px solid #0e2f5a;
    border-radius: 0px 15px 15px 0px  ;
    color: #fff;
    height: 7.1vh,
    margin: 0 1em;
    padding: 1.25em 1.7em;
    :hover {
      border: 2px solid #0e2f5a;
      font-size: 1em;
    }
  `;

  const Test = styled.p`
    font-size: 1.2em;
    padding-top: 10px;
  `;

  const [TestModal, setTestModal] = useState(false);

  const Body = styled.div({
    padding: '1.4em',
  });

  const Header = styled.h3({
    textAlign: 'center',
  });

  const Text = styled.p({
    padding: '0.5em',
    textAlign: 'center',
  });

  return (
    <div>
      <Modal
        show={TestModal}
        onHide={() => setTestModal(false)}
        style={{ paddingTop: '10%' }}
      >
        <Body>
          <Header> Remotify Beta Testing </Header>

          <Text>
            Testing program Testing program Testing program Testing program
            Testing program Testing program Testing program Testing program
            Testing program Testing program
          </Text>

          <Flex justifyCenter>
            <Box>
              <Flex justifyBetween>
                <Input placeholder="Email Address" />

                <Button> Invite </Button>
              </Flex>
            </Box>
          </Flex>
        </Body>
      </Modal>

      <Testing>
        <Flex justifyBetween>
          <Test style={{ paddingLeft: '30px' }}>
            Join the Remotify beta testing program !
          </Test>

          <Button
            onClick={() => {
              setTestModal(true);
            }}
            style={{ paddingRight: '20px', fontSize: '1.1em' }}
          >
            Join Program
          </Button>
        </Flex>
      </Testing>

      <footer style={Div}>
        <div style={{ padding: '2%' }}>
          <Flex justifyAround>
            <div>
              <h5 style={{ marginTop: '1em', color: '#fff' }}>
                {' '}
                Remotify.Inc{' '}
              </h5>

              <Flex justifyCenter>
                <Icon name="facebook" color="blue" />
                <Icon name="twitter" color="blue" />
                <Icon name="github" color="black" />
              </Flex>
            </div>
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <p style={Title}> Create Team </p>
              <p style={Title}> Documentation </p>
              <p style={Title}> Billing </p>
            </Flex>
            <Flex column>
              <p style={Head}> HELP </p>
              <p style={Title}> Integrations </p>
              <p style={Title}> Guides </p>
              <p style={Title}> About Us </p>
            </Flex>

            <Flex column>
              <p style={Head}> MORE </p>
              <p style={Title}> Social </p>
              <p style={Title}> Careers </p>
              <p style={Title}> Legal terms </p>
            </Flex>
          </Flex>
        </div>

        <div
          style={{
            textAlign: 'center',
            padding: '0.7%',
            backgroundColor: ' #361f94',
            fontSize: '0.8em',
            color: '#fff',
          }}
        >
          <p>
            Copyright© {new Date().getFullYear()} , a subsidiary of the
            <a href="/"> Fundry Program </a>.
            <br /> <a href="/"> Terms of Service </a> or{' '}
            <a href="/"> Privacy Policies </a>{' '}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
