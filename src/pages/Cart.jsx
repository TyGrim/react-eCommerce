import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;

function Cart(props) {
  return (
    <Container>
      <Navbar />
      <Alert />
      cart
      <Footer />
    </Container>
  );
}

export default Cart;
