import React from "react";
import styled from "styled-components";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

function Register() {
  return (
    <Container>
      <Navbar />
      <Alert />
      <Footer />
    </Container>
  );
}

export default Register;
