import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "Black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 300px;
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ItemAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemCount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ItemPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const ItemName = styled.span``;

const ItemID = styled.span``;

const ItemColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ItemSize = styled.span``;

function Cart(props) {
  return (
    <Container>
      <Navbar />
      <Alert />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>BACK TO SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <Details>
                <Image src="https://images.unsplash.com/photo-1650688156128-08997c7b0bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                <ItemDetails>
                  <ItemName>
                    <b>Item:</b> BIG CAMERA
                  </ItemName>
                  <ItemID>
                    <b>ID:</b> 09333555
                  </ItemID>
                  <ItemColor color="black" />
                  <ItemSize>
                    <b>Size:</b> Medium
                  </ItemSize>
                </ItemDetails>
              </Details>
              <PriceDetails>
                <ItemAmountContainer>
                  <Add />
                  <ItemCount>2</ItemCount>
                  <Remove />
                </ItemAmountContainer>
                <ItemPrice>
                  <b>Price:</b> $999.99
                </ItemPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
