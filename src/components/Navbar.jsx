import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
height: 60px;


`;
const Wrapper = styledComponents.div`
display:flex;
justify-content: space-between;
padding: 10px 20px;
`;
const Left = styledComponents.div`
flex:1;
`;

const Language = styledComponents.span`
font-size: 14px;
cursor: pointer;
`;

const Right = styledComponents.div`
flex:1;
`;
const Center = styledComponents.div`
flex:1;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
