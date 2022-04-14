import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
`;

const Wrapper = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`;

function Alert() {
  return (
    <Container>
      <Wrapper>SUPER SAVER! Free Shipping on Orders Over $50</Wrapper>
    </Container>
  );
}

export default Alert;
