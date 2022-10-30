import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  text-align: center;
`;
const Title = styled.h2``;
const Desc = styled.p``;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  justify-content: center;
`;
const Button = styled.button`
  width: 220px;
  height: 30px;
  background-color: aqua;
  border: none;
  outline: none;
  font-weight: 800;
  border-radius: 4px;
  cursor: pointer;
`;
const Sucess = () => {
  return (
    <Container>
      <Title> Đơn hàng #10294221 của bạn đã được đặt hàng thành công. </Title>
      <Desc> Chúng tôi sẽ giao hàng cho bạn trong thời gian sớm nhất. </Desc>
      <List>
        <Link to="/">
          <Button> Tiếp tục mua hàng </Button>
        </Link>
        <Button> Kết thúc mua hàng </Button>
      </List>
    </Container>
  );
};

export default Sucess;
