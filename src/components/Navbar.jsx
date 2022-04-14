import React from "react";
import styledComponents from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styledComponents.div`
height: 88px;
`;

const Wrapper = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
height: 88px

`;

const Left = styledComponents.div`
display:flex;
align-items: center;
flex:1;
`;

const Language = styledComponents.span`
font-size: 18px;
cursor: pointer;
`;

const SearchBar = styledComponents.div`
display: flex;
align-items: center;
border: 0.5px solid black;
margin-left: 25px;
margin-right: 25px;
padding: 5px;
`;

const Input = styledComponents.input`
border: none;
`;

const Center = styledComponents.div`
flex:1;
text-align: center;
`;

const Logo = styledComponents.h1`
text-transform: uppercase;
background-image: linear-gradient(
   -888deg,
   #0fb5ca 0%,
   #0dc39e 29%,
   #e376cc 67%,
   #7050c8 100%
 );
 background-clip: border-box;
 background-size: 200% auto;
 text-fill-color: transparent;
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 animation: textclip 4.4s infinite;
     font-size: 55px;

@keyframes textclip {
 to {
   background-position: 200% center;
 }
`;

const Right = styledComponents.div`
display:flex;
justify-content: flex-end;
align-items: center;
flex:1;
`;

const MenuItem = styledComponents.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchBar>
            <Input />
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </SearchBar>
        </Left>
        <Center>
          <Logo>SoftWear.</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
