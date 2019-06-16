import { Link } from "gatsby"
import React from "react"
import Img from "react-image"
import styled from "styled-components"
import Flex from "styled-flex-component"
// import useWindowWidth from "../../hook_style"
import { Icon } from "semantic-ui-react"

const Header = () => {
  const Div = styled.div`
      height: 9vh
      background : transparent
      padding-top: 1%;
    `
  const A = styled.a`
    color: #0b33a2;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
  `

  const Title = styled.a`
	font-size : 1em
	color  : white
  `

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `

  const Button = styled.button`
    background: #361F94;
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
  `

  const NameDiv = styled.div`
    margin-left: 4%;
  `

  // const hooks = useWindowWidth()
  return (
    <div>
      
        <Div style={{ paddingTop: "1%" }}>
          <nav>
            <Flex justifyBetween>
              <NameDiv>
                <Flex>
                  <Image
                    src={
                      "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                    }
                  />
                  <Link href="/">
                    <A>Remotify</A>
                  </Link>
                </Flex>
              </NameDiv>
              <Flex>
                <div style={{ paddingRight: "30px" }}>
                  <Link to="/apply">
                    <Title> Team </Title>
                  </Link>
                </div>
                <div style={{ paddingRight: "50px" }}>
                  <Link to="/apply">
                    <Title> Resources </Title>
                  </Link>
                </div>
                <Link to="/login">
                  <Button onClick={() => alert("hi")}> Download </Button>
                </Link>
              </Flex>
            </Flex>
          </nav>
        </Div>
     
        <Div style={{ height: "5.5vh", paddingTop: "2%", paddingRight: "3%" }}>
          <nav>
            <Flex justifyBetween>
              <NameDiv>
                <Flex>
                  <Image
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                    }
                  />
                  <Link href="/">
                    <A>Remotify</A>
                  </Link>
                </Flex>
              </NameDiv>
            </Flex>
          </nav>
        </Div>
     
    </div>
  )
}

export default Header
