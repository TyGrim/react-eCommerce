import React from "react";
import styledComponents from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styledComponents.div`
display: flex;
height: 100vh;
width: 100%;
position: relative;
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
`;

const Slide = styledComponents.div`
display: flex;
align
`;

const ImgContainer = styledComponents.div`
`;

const InfoContainer = styledComponents.div``;

function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper></Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
