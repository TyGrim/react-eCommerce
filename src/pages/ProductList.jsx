import React from "react";
import styled from "styled-components";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Alert />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Sort filter</Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
}

export default ProductList;
