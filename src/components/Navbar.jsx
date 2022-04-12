import React from "react";
import styledComponents from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styledComponents.div`
height: 60px;


`;
const Wrapper = styledComponents.div`
display:flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
`;
const Left = styledComponents.div`
display:flex;
align-items: center;
flex:1;
`;

const Language = styledComponents.span`
font-size: 14px;

cursor: pointer;
`;

const SearchBar = styledComponents.div`
display: flex;
align-items: center;
border: 0.5px solid black;
margin-left: 25px;
padding: 5px;
border: none;
`;

const Input = styledComponents.input`

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
          <SearchBar>
            <Input />
            <SearchIcon />
          </SearchBar>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
