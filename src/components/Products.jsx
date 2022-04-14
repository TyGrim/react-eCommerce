import React from "react";
import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
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
