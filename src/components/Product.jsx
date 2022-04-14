import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
`;

const Circle = styled.div``;

const Image = styled.img``;

const Info = styled.div``;

const Icon = styled.div``;

function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
