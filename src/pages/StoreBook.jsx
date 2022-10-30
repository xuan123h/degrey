import React from "react";
import styled from "styled-components";
import imagesLogo from "../../public/img/store-banner.png";
import images1 from "../../public/img/Store2.png";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 140px;
`;
const Wrapper = styled.div`
  width: 1420px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
const Content = styled.div``;
const Category = styled.div`
  margin-bottom: 10px;
`;
const Slider = styled.img`
  width: 1400px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const List = styled.div`
  padding: 10px 60px;
  display: flex;
  align-items: flex-start;
  gap: 200px;
`;
const ListOne = styled.div``;
const ListOneTitle = styled.h2``;
const ListOneUl = styled.ul``;
const ListOneUlName = styled.ul`
  font-weight: 800;
`;
const ListOneLi = styled.li``;
const ListOneItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ListOneItemOne = styled.li`
  font-weight: 700;
`;
const ListOneItemTwo = styled.li``;
const ListTwo = styled.div``;
const ListTwoTitle = styled.h2``;
const ListTwoList = styled.div`
  margin: 20px 0;
`;
const ListTwoImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
`;
const StoreBook = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Category> Trang chủ / Cửa hàng </Category>
          <Slider src={imagesLogo} alt="slider"></Slider>
          <List>
            <ListOne>
              <ListOneTitle> HỆ THỐNG CỬA HÀNG DEGREY</ListOneTitle>
              <ListOneUl>
                <ListOneUlName> Sài gòn </ListOneUlName>
                <ListOneLi> Q.Phú Nhuận: 43 Huỳnh Văn Bánh</ListOneLi>
                <ListOneLi> Q.Tân Phú: 905 Lũy Bán Bích</ListOneLi>
                <ListOneLi> Q.1: 26 Lý Tự Trọng (TNP)</ListOneLi>
              </ListOneUl>
              <ListOneUl>
                <ListOneUlName> Đà Lạt </ListOneUlName>
                <ListOneLi>Phường 1: 11 Khu Hoà Bình</ListOneLi>
              </ListOneUl>
              <ListOneItem>
                <ListOneItemOne>Hotline</ListOneItemOne>
                <ListOneItemTwo> 0336311117 </ListOneItemTwo>
              </ListOneItem>
              <ListOneItem>
                <ListOneItemOne> Facebook </ListOneItemOne>
                <ListOneItemTwo>
                  https://www.facebook.com/degrey.saigon/
                </ListOneItemTwo>
              </ListOneItem>
              <ListOneItem>
                <ListOneItemOne> Instagram </ListOneItemOne>
                <ListOneItemTwo>
                  https://www.instagram.com/degrey.saigon/
                </ListOneItemTwo>
              </ListOneItem>
            </ListOne>
            <ListTwo>
              <ListTwoTitle> Danh mục Page</ListTwoTitle>
              <ListTwoList> SẢN PHẦM DEGREY </ListTwoList>
              <ListTwoList> STORE | CỬA HÀNG </ListTwoList>
              <ListTwoList> DEGREY | ABOUT US </ListTwoList>
              <ListTwoImg src={images1}></ListTwoImg>
            </ListTwo>
          </List>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default StoreBook;
