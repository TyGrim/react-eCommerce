import React from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(195, 110, 192, 0.5)
    ),
    url("https://images.unsplash.com/photo-1650783756107-739513b38177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"),
    no-repeat center center fixed;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  text-align: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 45%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ borderRadius: "10px" })}
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

const Button = styled.button`
  width: 50%;
  font-size: 1.25rem;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "100%", borderRadius: "10px" })}
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE YOUR ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an accont, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
