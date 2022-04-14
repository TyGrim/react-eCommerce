import React from "react";
import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
`;

function Products() {
  return (
    <Container>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Products;
