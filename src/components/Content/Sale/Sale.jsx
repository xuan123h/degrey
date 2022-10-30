import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 220px 0;
  margin-bottom: 1150px !important ;
  border-bottom: 1px solid green;
`;
const Wrapper = styled.div`
  width: 1440px;
`;
const Title = styled.h2`
  width: 1286px;
  color: #8b572a;
  font-size: 16px;
  margin-bottom: 10px;
`;
const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  gap: 140px;
`;
const Item = styled.div`
  width: 252px;
  height: 135px;
  color: #212529;
  font-size: 16px;
  background: #ccc;
  border-radius: 10px;
  padding: 10px 5px;
`;
const ItemTitle = styled.h4`
  width: 302px;
  height: 31px;
  font-size: 17px;
  padding: 10px 10px 0px;
  margin: 0px 0px 8px;
`;
const ItemDesc = styled.p`
  width: 237px;
  color: #000000;
  font-size: 13px;
  padding: 0 10px;
  margin: 10px 0;
`;
const ItemButtonList = styled.span`
  font-size: 12px;
  background: #0000000d;
  color: #4a4a4a;
  margin: 20px 100px;
`;
const ItemButton = styled.button`
  width: 120px;
  height: 27px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const Sale = () => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked((clicked) => !clicked);
  };
  return (
    <Container>
      <Wrapper>
        <Title> ĐẶC QUYỀN CHO BẠN HÔM NAY!</Title>
        <WrapperItem>
          <Item>
            <ItemTitle> Hỗ trợ vận chuyển</ItemTitle>
            <ItemDesc>
              Áp mã để nhận ngay ưu đãi giảm giá vận chuyển tại Degrey
            </ItemDesc>
            <ItemButtonList>
              <ItemButton onClick={handleClicked}>
                {clicked === false ? "Sao chép mã" : "Đã sao chép"}
              </ItemButton>
            </ItemButtonList>
          </Item>
          <Item>
            <ItemTitle> Hà Nội Freeship</ItemTitle>
            <ItemDesc>
              Degrey dành tặng Hà Nội mã freeship 0đ (số lượng có hạn)
            </ItemDesc>
            <ItemButtonList>
              <ItemButton onClick={handleClicked}>
                {clicked === false ? "Sao chép mã" : "Đã sao chép"}
              </ItemButton>
            </ItemButtonList>
          </Item>
          <Item>
            <ItemTitle> Tặng 125.000đ</ItemTitle>
            <ItemDesc>
              Áp dụng đặc biệt cho đơn hàng từ 2,5 triệu đồng.
            </ItemDesc>
            <ItemButtonList>
              <ItemButton onClick={handleClicked}>
                {clicked === false ? "Sao chép mã" : "Đã sao chép"}
              </ItemButton>
            </ItemButtonList>
          </Item>
          <Item>
            <ItemTitle> Khuyến mãi đến 10%</ItemTitle>
            <ItemDesc>
              Mã giảm 10% cho hoá đơn mua hàng trên 5 triệu đồng
            </ItemDesc>
            <ItemButtonList>
              <ItemButton onClick={handleClicked}>
                {clicked === false ? "Sao chép mã" : "Đã sao chép"}
              </ItemButton>
            </ItemButtonList>
          </Item>
        </WrapperItem>
      </Wrapper>
    </Container>
  );
};

export default Sale;
