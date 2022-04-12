import React from "react";
import styledComponents from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
`;

const Input = styledComponents.input`
border: none;
`;

const Center = styledComponents.div`
flex:1;
`;

const Logo = styledComponents.h1`
  font-weight:bold;
  text-align: center
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
