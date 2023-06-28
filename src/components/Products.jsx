import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 20px 0px 30px 0px;
`;
const Products = () => {
  return (
    <div>
      <Title>Featured Products</Title>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
