import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

function SignIn() {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>
  );
}

export default SignIn;
