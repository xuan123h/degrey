import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import bell from "../../../public/img/logo-footer.svg";
const Container = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 0;
`;
const Wrapper = styled.div`
  max-width: 1220px;
  display: flex;
  align-items: start;
  gap: 20px;
`;
const ListOne = styled.div``;
const ListOneTitle = styled.h2`
  width: 306px;
  color: #212529;
  font-size: 18px;
  margin-bottom: 10px;
`;
const ListOneDesc = styled.p`
  width: 306px;
  color: #212529;
  font-size: 16px;
  margin-bottom: 10px;
`;
const ListOneImg = styled.img`
  width: 150px;
  height: 57px;
  object-fit: cover;
`;
const ListTwo = styled.div`
  list-style: none;
`;
const ListTwoTitle = styled.h2`
  width: 306px;
  color: #212529;
  font-size: 18px;
  margin-bottom: 10px;
`;
const ListTwoItem = styled.h2`
  display: ${(props) => (props.item ? "flex" : "")};
  align-items: ${(props) => (props.item ? "start" : "")};
  margin-bottom: 5px;
`;
const ListTwoLi = styled.li`
  width: 85px;
  color: #212529;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 600;
`;
const ListTwoDesc = styled.p`
  width: 306px;
  color: #212529;
  font-size: 16px;
  font-weight: 400;
`;
const ListThree = styled.div``;
const ListThreeTitle = styled.h2`
  width: 306px;
  color: #212529;
  font-size: 18px;
  margin-bottom: 10px;
`;
const ListThreeDesc = styled.p`
  width: 306px;
  color: #212529;
  font-size: 16px;
  margin-bottom: 5px;
`;
const ListFor = styled.div``;
const ListForTitle = styled.h2`
  width: 306px;
  color: #212529;
  font-size: 18px;
  margin-bottom: 10px;
`;
const ListForWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ListForPhone = styled.p`
  width: 30px;
  height: 30px;
`;
const ListForItem = styled.div``;
const ListForItemTel = styled.div`
  width: 165px;
  color: #333333;
  font-size: 24px;
`;
const ListForItemGmail = styled.div`
  width: 165px;
  color: #212529;
  font-size: 16px;
`;
const ListForLi = styled.div`
  width: 306px;
  color: #212529;
  font-size: 18px;
  margin-bottom: 5px;
`;
const ListForImage = styled.div`
  display: flex;
  align-items: center;
`;
const ListForImageItem = styled.p`
  width: 28px;
  height: 30px;
  color: violet;
  font-weight: bold;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ListOne>
          <ListOneTitle> Về DEGREY</ListOneTitle>
          <ListOneDesc>
            Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi ngày u
            buồn về sự nghiệp, tương lai trong quá khứ của chính mình” – theo
            lời chia sẻ của Degrey’s founder.
          </ListOneDesc>
          <ListOneImg src={bell}></ListOneImg>
        </ListOne>
        <ListTwo>
          <ListTwoTitle> Địa chỉ</ListTwoTitle>
          <ListTwoItem>
            <ListTwoLi> -Sài Gòn:</ListTwoLi>
            <ListTwoDesc>
              43 Huỳnh Văn Bánh P.17 Q.Phú Nhuận 905 Luỹ Bán Bích P.Tân Thành
              Q.Tân Phú 26 Lý Tự Trọng Q.1 - The New Playground
            </ListTwoDesc>
          </ListTwoItem>
          <ListTwoItem>
            <ListTwoLi> -Đà Lạt:</ListTwoLi>
            <ListTwoDesc>11 Khu Hoà Bình P.1</ListTwoDesc>
          </ListTwoItem>
          <ListTwoItem item>
            <ListTwoLi> Điện thoại: </ListTwoLi>
            <ListTwoDesc>0336311117</ListTwoDesc>
          </ListTwoItem>
          <ListTwoItem item>
            <ListTwoLi> Email: </ListTwoLi>
            <ListTwoDesc>degrey.vn@gmail.com</ListTwoDesc>
          </ListTwoItem>
        </ListTwo>
        <ListThree>
          <ListThreeTitle> Hỗ trợ khách hàng</ListThreeTitle>
          <ListThreeDesc> Shop</ListThreeDesc>
          <ListThreeDesc>
            Hướng dẫn đặt hàng Chính xác và quy định Chính sách bảo mật Thông
            tin sở hữa
          </ListThreeDesc>
        </ListThree>
        <ListFor>
          <ListForTitle> Chăm sóc khách hàng</ListForTitle>
          <ListForWrapper>
            <ListForPhone>
              <i class="ri-phone-line"></i>
            </ListForPhone>
            <ListForItem>
              <ListForItemTel> 0336311117</ListForItemTel>
              <ListForItemGmail> degrey.vn@gmail.com</ListForItemGmail>
            </ListForItem>
          </ListForWrapper>
          <ListForLi> Follow Us</ListForLi>
          <ListForImage>
            <ListForImageItem>
              <i class="ri-facebook-box-line"></i>
            </ListForImageItem>
            <ListForImageItem>
              <i class="ri-instagram-line"></i>
            </ListForImageItem>
            <ListForImageItem>
              <i class="ri-twitter-line"></i>
            </ListForImageItem>
            <ListForImageItem>
              <i class="ri-google-line"></i>
            </ListForImageItem>
            <ListForImageItem>
              <i class="ri-youtube-line"></i>
            </ListForImageItem>
          </ListForImage>
        </ListFor>
      </Wrapper>
    </Container>
  );
};

export default Footer;
