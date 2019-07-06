import { Link } from 'gatsby';
import React from 'react';
import Img from 'react-image';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
// import useWindowWidth from "../../hook_style"
import { Icon } from 'semantic-ui-react';

const Header = () => {
  const Div = {
    padding: '1em',
    paddingTop: '1em',
    backgroundColor: 'transparent',
    paddingTop: '1%',
    boxShadow: '0px 7px 7px #D87E2C',
  };
  const A = styled.a`
    color: #0b33a2;
    text-decoration: none;
    font-size: 25px;
    font-family: comic sans ms ;
    font-weight: bold;
  `;

  const Title = styled.a`
	font-size: 17px;
	color  : white
  `;

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `;

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      color: #fff;
      background: transparent;
    }
  `;

  const NameDiv = styled.div`margin-left: 4%;`;

  // const hooks = useWindowWidth()
  return (
    <div>
      <div style={Div}>
        <nav>
          <Flex justifyBetween>
            <NameDiv>
              <Flex>
                <Image
                  src={
                    'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
                  }
                />
                <Link href="/">
                  <A>Remotify</A>
                </Link>
              </Flex>
            </NameDiv>
            <Flex>
              <div style={{ paddingRight: '30px' }}>
                <Link to="/">
                  <Title> Team </Title>
                </Link>
              </div>
              <div style={{ paddingRight: '50px' }}>
                <Link to="/">
                  <Title> Resources </Title>
                </Link>
              </div>
              <Link to="/">
                <Button onClick={() => alert('hi')}> Download </Button>
              </Link>
            </Flex>
          </Flex>
        </nav>
      </div>
    </div>
  );
};

export default Header;
