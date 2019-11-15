import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Img from 'react-image';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import media from 'styled-media-query';

// import useWindowWidth from "../../hook_style"

interface Props {
  style: Boolean,
  auth: Boolean,
}

const Header = ({ style, auth }: Props) => {
  console.log(auth, 'auth from header');
  const Div = {
    padding: '1em',
    paddingTop: '1em',
    backgroundColor: style == 'download' ? '#f2f5ff' : 'transparent',
    boxShadow: '0px 7px 7px #D87E2C',
  };

  const Head = {
    padding: '1em',
    paddingTop: '1em',
    backgroundColor: 'transparent',
    Color: '#0b33a2',
  };

  const Brand = styled.p`
    color: #0b33a2;
    text-decoration#: none;
    font-size: 25px;
    font-family: comic sans ms;
    font-weight: bold;
    ${media.lessThan('medium')`
      font-size: 20px
  `};
  `;

  const Title = styled.a`
    font-size: 17px;
    color: #0b33a2;
    ${media.lessThan('medium')`
    font-size: 15px
    padding-top : 10px
  `};
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
    ${media.lessThan('medium')`
      margin: 0 0.25em;
      padding: 0.25em 1.2em;
      height: 30px;
  `};
  `;

  const NameDiv = styled.div`margin-left: 2%;`;

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

  // const hooks = useWindowWidth()
  return (
    <div>
      {Width >= 600 ? (
        <div>
          {style == false ? (
            <div style={Head}>
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Flex>
                      <Image
                        src={
                          'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
                        }
                      />
                      <Link to="/">
                        <Brand>Remotify</Brand>
                      </Link>
                    </Flex>
                  </NameDiv>
                  <Flex>
                    <div style={{ paddingRight: '20px' }}>
                      <Link to="/">
                        <Title> Team </Title>
                      </Link>
                    </div>
                    <div style={{ paddingRight: '20px' }}>
                      <Link to="/">
                        <Title> Resources </Title>
                      </Link>
                    </div>
                  </Flex>
                </Flex>
              </nav>
            </div>
          ) : (
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
                      <Link to="/">
                        <Brand>Remotify</Brand>
                      </Link>
                    </Flex>
                  </NameDiv>
                  <Flex>
                    <div style={{ paddingRight: '30px' }}>
                      <Link to="/">
                        <Title> Team </Title>
                      </Link>
                    </div>
                    <div style={{ paddingRight: '30px' }}>
                      <Link to="/">
                        <Title> Resources </Title>
                      </Link>
                    </div>
                    {!auth ? (
                      <Flex>
                        <div style={{ paddingRight: '20px' }}>
                          <Link to="user/login">
                            <Title> Login </Title>
                          </Link>
                        </div>

                        <Link to="/download/download">
                          <Button> Download </Button>
                        </Link>
                      </Flex>
                    ) : (
                      <div style={{ paddingRight: '20px' }}>
                        <Link to="user/login">
                          <Title> Logout </Title>
                        </Link>
                      </div>
                    )}
                  </Flex>
                </Flex>
              </nav>
            </div>
          )}{' '}
        </div>
      ) : (
        // {/* MOBILE RESPONSIVENESS   */}
        <div>
          {style == false ? (
            <div style={Head}>
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Flex>
                      <Image
                        src={
                          'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
                        }
                      />
                      <Link to="/">
                        <Brand>Remotify</Brand>
                      </Link>
                    </Flex>
                  </NameDiv>

                  <Link to="/download/download">
                    <Button> Download </Button>
                  </Link>
                </Flex>
              </nav>
            </div>
          ) : (
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
                      <Link to="/">
                        <Brand>Remotify</Brand>
                      </Link>
                    </Flex>
                  </NameDiv>

                  <Link to="/download/download">
                    <Button> Download </Button>
                  </Link>
                </Flex>
              </nav>
            </div>
          )}{' '}
        </div>
      )}
    </div>
  );
};

export default Header;
