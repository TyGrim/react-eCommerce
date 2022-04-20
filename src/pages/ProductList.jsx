import React from "react";
import styled from "styled-components";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
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

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 15px;
`;

const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Alert />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter by:</FilterText>
          <Select>
            <Option disabled selected>
              Filter Products
            </Option>
            <Option>Nerd Shirts</Option>
            <Option>Juggalo Joggers</Option>
            <Option>Accessories</Option>
            <Option>All Products</Option>
          </Select>
          <Select>
            <Option disabled selected>
              SIZE
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort by:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price &uarr; (asc)</Option>
            <Option>Price &darr; (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
