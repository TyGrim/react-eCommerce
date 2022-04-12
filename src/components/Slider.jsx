import React from "react";
import styledComponents from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styledComponents.div`
display: flex;
height: 100vh;
width: 100%;
position: relative;
overflow: hidden;
`;

const Arrow = styledComponents.div`
width: 50px;
height: 50px;
background-color: whitesmoke;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
cursor: pointer;
margin: auto;
opacity: 0.5;
`;

const Wrapper = styledComponents.div`
height: 100%;
display: flex;

`;

const Slide = styledComponents.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;

const ImgContainer = styledComponents.div`
height: 100%;
flex: 1;
`;

const Image = styledComponents.img`
height: 100%;
`;

const InfoContainer = styledComponents.div`
flex: 1;
padding: 50px;
`;

const Title = styledComponents.h1`
font-size: 70px;
`;

const Description = styledComponents.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styledComponents.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>Don't Wait.. Limited Prints Availible NOW</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
          </ImgContainer>
          <InfoContainer>
            <Title>Fall Sale</Title>
            <Description>Don't Wait.. Limited Prints Availible NOW</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
          </ImgContainer>
          <InfoContainer>
            <Title>Winter Sale</Title>
            <Description>Don't Wait.. Limited Prints Availible NOW</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
