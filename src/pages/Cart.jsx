import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

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
  display: flex;
  align-items: center;
  flex: 2;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  padding: 10px;
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

const Summary = styled.div`
  flex: 1;
  border: solid black 0.5px;
  border-radius: 10px;
  padding: 20px;
  height: 40%;
`;

const SumTitle = styled.h1`
  font-weight: 200;
`;

const SumItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SumItemText = styled.span`
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SumItemPrice = styled.span``;

const SumButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

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
                    <b>Size:</b> 24 MP
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
            <hr
              style={{
                color: "#eee",
                backgroundColor: "#eee",
                height: 0.5,
                borderColor: "#eee",
              }}
            />
            <Product>
              <Details>
                <Image src="https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5lcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <ItemDetails>
                  <ItemName>
                    <b>Item:</b> Yellow Hoodie
                  </ItemName>
                  <ItemID>
                    <b>ID:</b> 0555666888
                  </ItemID>
                  <ItemColor color="yellow" />
                  <ItemSize>
                    <b>Size:</b> Large
                  </ItemSize>
                </ItemDetails>
              </Details>
              <PriceDetails>
                <ItemAmountContainer>
                  <Add />
                  <ItemCount>1</ItemCount>
                  <Remove />
                </ItemAmountContainer>
                <ItemPrice>
                  <b>Price:</b> $39.99
                </ItemPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SumTitle>ORDER SUMMARY</SumTitle>
            <SumItem>
              <SumItemText>Subtotal</SumItemText>
              <SumItemPrice>$ 69</SumItemPrice>
            </SumItem>
            <SumItem>
              <SumItemText>Estimated Shipping</SumItemText>
              <SumItemPrice>$ 6.99</SumItemPrice>
            </SumItem>
            <SumItem>
              <SumItemText>Shipping Discount</SumItemText>
              <SumItemPrice>$ -6.999</SumItemPrice>
            </SumItem>
            <SumItem>
              <SumItemText type="total">Total</SumItemText>
              <SumItemPrice>$ 69</SumItemPrice>
            </SumItem>
            <SumButton>CHECKOUT NOW</SumButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
