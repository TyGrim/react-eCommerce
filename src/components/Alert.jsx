import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 600;
`;

function Alert() {
  return <Container>SUPER SAVER! Free Shipping on Orders Over $50</Container>;
}

export default Alert;
